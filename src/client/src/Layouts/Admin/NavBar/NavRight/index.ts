import { connect } from 'react-redux';

import NavRight from './NavRight';
import { Props } from './types';

import State from '../../../../Store/state';

const mapStateToProps = (state: State): Props => {
    return {
        authData: state.auth.data,
    };
};

export default connect<Props, null, {}, State>(mapStateToProps)(NavRight);
