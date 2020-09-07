import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { withRouter } from 'react-router-dom';

import State from 'Store/state';
import { navContentLeave, NavContentLeave } from 'Store/Gui/actions';

import NavContent from './NavContent';
import { StateProps, DispatchProps } from './types';

const mapStateToProps = (state: State): StateProps => {
    return {
        collapseMenu: state.gui.collapseMenu,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, any>): DispatchProps => {
    return {
        onNavContentLeave: (): NavContentLeave => dispatch(navContentLeave()),
    };
};

export default withRouter(
    connect<StateProps, DispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(NavContent),
);
