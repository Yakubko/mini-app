import { connect } from 'react-redux';

import Users from './Users';
import { Props } from './types';

import State from '../../../Store/state';

const mapStateToProps = (state: State): Props => {
    return {
        authData: state.auth.data,
    };
};

export default connect<Props, null, {}, State>(mapStateToProps)(Users);
