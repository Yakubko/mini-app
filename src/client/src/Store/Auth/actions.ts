import axios, { AxiosResponse } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import {
    AuthStates,
    SET_STATE,
    STATE_UNAUTHORIZED,
    STATE_SIGNING_IN,
    STATE_AUTHORIZING,
    STATE_AUTHORIZED,
} from './constants';
import State from '../state';

export interface SetStatus {
    type: SET_STATE;
    payload: { state: AuthStates; data: State['auth']['data']; error: null | string };
}
export const setStatus = (
    state: AuthStates,
    data: State['auth']['data'] = null,
    error: null | string = null,
): SetStatus => ({
    type: SET_STATE,
    payload: { state, data, error },
});

export type AuthActions = SetStatus;

export const logout = (): ThunkAction<SetStatus, State, null, any> => {
    return (dispatch: ThunkDispatch<State, undefined, any>): SetStatus => {
        localStorage.removeItem('token');
        return dispatch(setStatus(STATE_UNAUTHORIZED));
    };
};

export const signIn = (username: string, password: string): ThunkAction<Promise<any>, State, null, any> => {
    return async (dispatch: ThunkDispatch<State, null, any>): Promise<any> => {
        dispatch(setStatus(STATE_SIGNING_IN));
        try {
            const response: AxiosResponse<{ token: string }> = await axios.post<{ token: string }>(
                '/api/v1/sign-in',
                { username, password },
                { headers: { 'Content-Type': 'application/json' } },
            );
            localStorage.setItem('token', response.data.token);

            dispatch(fetchAuthUser());
        } catch (err) {
            dispatch(setStatus(STATE_UNAUTHORIZED, null, err.response.data.message));
        }
    };
};

export const fetchAuthUser = (): ThunkAction<Promise<any>, State, null, any> => {
    // , getState: () => State
    return async (dispatch: ThunkDispatch<State, null, any>): Promise<any> => {
        dispatch(setStatus(STATE_AUTHORIZING));

        const token = localStorage.getItem('token');
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;

        try {
            const response: AxiosResponse<State['auth']['data']> = await axios.get<State['auth']['data']>(
                '/api/v1/who-am-i',
            );

            if (response.data) {
                dispatch(setStatus(STATE_AUTHORIZED, response.data));
            } else {
                localStorage.removeItem('token');
                dispatch(setStatus(STATE_UNAUTHORIZED));
            }
        } catch (err) {
            localStorage.removeItem('token');
            dispatch(setStatus(STATE_UNAUTHORIZED));
        }
    };
};

// const shouldFetchAuthUser = (state: State) => {
//     switch (state.Auth.status) {
//         case null:
//         case STATE_AUTHORIZED:
//             return true;

//         default:
//             return false;
//     }
// };
