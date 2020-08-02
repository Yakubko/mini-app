import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import windowSize from 'react-window-size';

import OutsideClick from './OutsideClick';
import { StateProps, DispatchProps } from './types';

import State from '../../../../../Store/state';
import { collapseMenu, CollapseMenu } from '../../../../../Store/Gui/actions';

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

export default connect<StateProps, DispatchProps, {}, State>(
    mapStateToProps,
    mapDispatchToProps,
)(windowSize(OutsideClick));
