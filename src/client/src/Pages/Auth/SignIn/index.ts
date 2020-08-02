import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import SignIn from './SignIn';
import { StateProps, DispatchProps } from './types';

import State from '../../../Store/state';
import { signIn, fetchAuthUser } from '../../../Store/Auth/actions';

const mapStateToProps = (state: State): StateProps => {
    return {
        state: state.auth.state,
        error: state.auth.error,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, any>): DispatchProps => {
    return {
        signIn: (username: string, password: string): ReturnType<typeof signIn> => dispatch(signIn(username, password)),
        fetchAuthUser: (): ReturnType<typeof fetchAuthUser> => dispatch(fetchAuthUser()),
    };
};

export default connect<StateProps, DispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(SignIn);
