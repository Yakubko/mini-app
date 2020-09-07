import { connect } from 'react-redux';

import State from 'Store/state';

import Users from './Users';
import { Props } from './types';

const mapStateToProps = (state: State): Props => {
    return {
        authData: state.auth.data,
    };
};

export default connect<Props, null, {}, State>(mapStateToProps)(Users);
