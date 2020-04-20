import SignUp from './SignUp';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import State from '../../../../store/state';
import * as aclActions from '../../../../store/acl/actions';

// Store props interface
interface StateProps {
    status: State['acl']['status'];
    error: State['acl']['error'];
}

// Store dispatch props interface
interface DispatchProps {
    signIn: typeof aclActions.signIn;
}

// Export merged store props
export type StoreProps = StateProps & DispatchProps;

// Get acl status and error
const mapStateToProps = (state: State): StateProps => {
    return {
        status: state.acl.status,
        error: state.acl.error,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, null, any>): DispatchProps => {
    return {
        signIn: (username: string, password: string) => dispatch(aclActions.signIn(username, password)),
    };
};

export default connect<StateProps, DispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(SignUp);
