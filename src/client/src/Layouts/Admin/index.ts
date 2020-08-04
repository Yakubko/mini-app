import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import windowSize from 'react-window-size';

import Admin from './Admin';
import { StateProps, DispatchProps } from './types';

import State from '../../Store/state';
import { collapseMenu, CollapseMenu } from '../../Store/Gui/actions';

const mapStateToProps = (state: State): StateProps => {
    return {
        auth: {
            state: state.auth.state,
        },

        defaultPath: state.gui.defaultPath,
        collapseMenu: state.gui.collapseMenu,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, any>): DispatchProps => {
    return {
        actionCollapseMenu: (): CollapseMenu => dispatch(collapseMenu()),
    };
};

export default connect<StateProps, DispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(windowSize(Admin));
