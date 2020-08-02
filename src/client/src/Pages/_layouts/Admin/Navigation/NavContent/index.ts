import { forwardRef } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import windowSize from 'react-window-size';
import { withRouter } from 'react-router-dom';

import NavContent from './NavContent';
import { StateProps, DispatchProps } from './types';

import State from '../../../../../Store/state';
import { navContentLeave, NavContentLeave } from '../../../../../Store/Gui/actions';

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
    connect<StateProps, DispatchProps, {}, State>(
        mapStateToProps,
        mapDispatchToProps,
    )(windowSize(forwardRef(NavContent))),
);
