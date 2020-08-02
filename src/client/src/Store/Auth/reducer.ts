import { AuthState } from './state';
import { AuthActions } from './actions';
import { STATE_EMPTY, SET_STATE } from './constants';

const initialState: AuthState = {
    error: null,
    state: STATE_EMPTY,
    data: null,
};

const AuthReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case SET_STATE:
            return { ...action.payload };

        default:
            return state;
    }
};

export default AuthReducer;
