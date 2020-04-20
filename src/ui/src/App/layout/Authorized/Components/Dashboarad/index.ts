import Dashboard from './Dashboard';
import { connect } from 'react-redux';

import State from '../../../../../store/state';

// Store props interface
interface StateProps {
    aclData: State['acl']['data'];
}

// Export store props
export type StoreProps = StateProps;

// Get acl data
const mapStateToProps = (state: State): StateProps => {
    return {
        aclData: state.acl.data,
    };
};

export default connect<StateProps, {}, {}, State>(mapStateToProps)(Dashboard);
