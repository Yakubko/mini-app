import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { SET_STATE, SET_SIGNED_OUT, SET_SIGNED_IN } from './constants';
import State from '../state';

export interface SetState {
    type: SET_STATE;
    payload: State['auth']['state'];
}
export function setState(data: State['auth']['state']): SetState {
    return { type: SET_STATE, payload: data };
}

export interface SetSignedOut {
    type: SET_SIGNED_OUT;
}
export function setSignedOut(): SetSignedOut {
    return { type: SET_SIGNED_OUT };
}

export interface SetSignedIn {
    type: SET_SIGNED_IN;
    payload: State['auth']['data'];
}
export function setSignedIn(data: State['auth']['data']): SetSignedIn {
    return { type: SET_SIGNED_IN, payload: data };
}

export type AuthActions = SetState | SetSignedOut | SetSignedIn;

export const fetchAuthUser = (): ThunkAction<Promise<any>, State, null, any> => {
    return async (dispatch: ThunkDispatch<State, null, any>): Promise<any> => {
        dispatch(setState('authorizing'));

        const token = localStorage.getItem('token');
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;

        try {
            const response = await axios.get<State['auth']['data']>('/api/v1/who-am-i');

            if (response.data) {
                dispatch(setSignedIn(response.data));
            } else {
                throw Error('Unauthorized');
            }
        } catch (err) {
            localStorage.removeItem('token');
            dispatch(setSignedOut());
        }
    };
};
