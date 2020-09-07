import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import State from 'Store/state';
import { collapseMenu, CollapseMenu } from 'Store/Gui/actions';

import NavItem from './NavItem';
import { DispatchProps } from './types';

const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, any>): DispatchProps => {
    return {
        onItemClick: (): CollapseMenu => dispatch(collapseMenu()),
    };
};

export default connect<{}, DispatchProps, {}, State>(null, mapDispatchToProps)(NavItem);
