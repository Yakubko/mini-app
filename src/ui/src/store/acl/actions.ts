import axios, { AxiosResponse } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import * as constants from './constants';
import State from '../state';

// Action for change status
export interface SetStatus {
    type: constants.SET_STATUS;
    payload: { status: constants.AclStatuses; data: State['acl']['data']; error: null | string };
}
export const setStatus = (
    status: constants.AclStatuses,
    data: State['acl']['data'] = null,
    error: null | string = null,
): SetStatus => ({
    type: constants.SET_STATUS,
    payload: { status, data, error },
});

// Export all ACL actions
export type AclActions = SetStatus;

/**
 * Logout user
 */
export const logout = (): ThunkAction<SetStatus, State, null, any> => {
    return (dispatch: ThunkDispatch<State, undefined, any>): SetStatus => {
        // Remove token from storage
        localStorage.removeItem('token');
        return dispatch(setStatus(constants.STATUS_UNAUTHORIZED));
    };
};

/**
 * signIn user
 *
 * @param username    - User signIn name (username)
 * @param password    - User password
 */
export const signIn = (username: string, password: string): ThunkAction<Promise<any>, State, null, any> => {
    return async (dispatch: ThunkDispatch<State, null, any>) => {
        dispatch(setStatus(constants.STATUS_SIGNING_IN));
        try {
            // Create POST request
            const response: AxiosResponse<{ token: string }> = await axios.post<{ token: string }>('/api/v1/signin', {
                username: username,
                password: password,
            });
            // After success save token to storage
            localStorage.setItem('token', response.data.token);

            // Load ALC data
            dispatch(fetchAclData());
        } catch (err) {
            dispatch(setStatus(constants.STATUS_UNAUTHORIZED, null, err.response.data.message));
        }
    };
};

/**
 * Get ACL data
 */
export const fetchAclData = (): ThunkAction<Promise<any>, State, null, any> => {
    return async (dispatch: ThunkDispatch<State, null, any>, getState: () => State) => {
        // Check if data was loaded before
        if (!shouldfetchAclData(getState())) {
            return;
        }

        dispatch(setStatus(constants.STATUS_AUTHORIZING));

        // Add stored tokent to header
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        try {
            // Get ACL data from server
            const response: AxiosResponse<State['acl']['data']> = await axios.get<State['acl']['data']>(
                '/api/v1/whoami',
            );

            // If user is object token is valid
            if (response.data?.user) {
                dispatch(setStatus(constants.STATUS_AUTHORIZED, response.data));
            } else {
                // Remove bad token
                localStorage.removeItem('token');
                // If user is null it means unauthorized
                dispatch(setStatus(constants.STATUS_UNAUTHORIZED));
            }
        } catch (err) {
            localStorage.removeItem('token');
            dispatch(setStatus(constants.STATUS_UNAUTHORIZED));
        }
    };
};

/**
 * Check if ACL data are already loaded
 *
 * @param state     - State from getState() in middleware
 */
const shouldfetchAclData = (state: State) => {
    switch (state.acl.status) {
        case constants.STATUS_AUTHORIZED:
        case constants.STATUS_AUTHORIZING:
            return false;

        default:
            return true;
    }
};
