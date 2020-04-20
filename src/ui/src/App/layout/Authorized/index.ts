import AdminLayout from './Authorized';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import State from '../../../store/state';
import * as aclActions from '../../../store/acl/actions';
import * as guiActions from '../../../store/gui/actions';

// Store props interface
interface StateProps {
    acl: {
        status: State['acl']['status'];
    };

    isDark: State['gui']['isDark'];
}

// Store dispatch props interface
interface DispatchProps {
    fetchAclData: typeof aclActions.fetchAclData;

    onToggleMode: typeof guiActions.toggleMode;
}

// Export merged store props
export type StoreProps = StateProps & DispatchProps;

// Get ACL status and GUI theme
const mapStateToProps = (state: State): StateProps => {
    return {
        acl: {
            status: state.acl.status,
        },

        isDark: state.gui.isDark,
    };
};

// Get fetch acl data and toggle mode
const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, any>): DispatchProps => {
    return {
        fetchAclData: () => dispatch(aclActions.fetchAclData()),

        onToggleMode: () => dispatch(guiActions.toggleMode()),
    };
};

export default connect<StateProps, DispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(AdminLayout);
