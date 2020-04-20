import NavBar from './NavBar';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import State from '../../../../store/state';
import * as aclActions from '../../../../store/acl/actions';

// Store dispatch props interface
interface DispatchProps {
    logout: typeof aclActions.logout;
}

// Export store props
export type StoreProps = DispatchProps & RouteComponentProps;

// Get log out action
const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, any>): DispatchProps => {
    return {
        logout: () => dispatch(aclActions.logout()),
    };
};

export default connect<{}, DispatchProps, {}, State>(null, mapDispatchToProps)(withRouter(NavBar));
