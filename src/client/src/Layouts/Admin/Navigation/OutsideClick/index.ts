import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import State from 'Store/state';
import { collapseMenu, CollapseMenu } from 'Store/Gui/actions';

import OutsideClick from './OutsideClick';
import { StateProps, DispatchProps } from './types';

const mapStateToProps = (state: State): StateProps => {
    return {
        collapseMenu: state.gui.collapseMenu,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, any>): DispatchProps => {
    return {
        onToggleNavigation: (): CollapseMenu => dispatch(collapseMenu()),
    };
};

export default connect<StateProps, DispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(OutsideClick);
