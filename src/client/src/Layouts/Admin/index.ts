import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import windowSize from 'react-window-size';

import Admin from './Admin';
import { DispatchProps } from './types';

import State from '../../Store/state';
import { collapseMenu, CollapseMenu } from '../../Store/Gui/actions';

const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, any>): DispatchProps => {
    return {
        actionCollapseMenu: (): CollapseMenu => dispatch(collapseMenu()),
    };
};

export default connect<null, DispatchProps, {}, State>(null, mapDispatchToProps)(windowSize(Admin));
