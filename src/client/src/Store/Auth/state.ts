import * as constants from './constants';

export interface AuthState {
    error: null | string;
    state: constants.AuthStates;
    data: null | {};
}
