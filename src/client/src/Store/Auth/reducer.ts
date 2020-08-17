import { initialState, AuthState } from './state';
import { AuthActions } from './actions';
import { SET_STATE, SET_SIGNED_OUT, SET_SIGNED_IN } from './constants';

const AuthReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case SET_STATE:
            return { ...state, state: action.payload };

        case SET_SIGNED_IN:
            return { ...state, data: action.payload, state: 'authorized' };

        case SET_SIGNED_OUT:
            return { ...initialState, state: 'unauthorized' };

        default:
            return state;
    }
};

export default AuthReducer;
