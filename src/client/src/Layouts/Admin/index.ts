import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import State from 'Store/state';
import { collapseMenu, CollapseMenu } from 'Store/Gui/actions';

import Admin from './Admin';
import { DispatchProps } from './types';

const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, any>): DispatchProps => {
    return {
        actionCollapseMenu: (): CollapseMenu => dispatch(collapseMenu()),
    };
};

export default connect<null, DispatchProps, {}, State>(null, mapDispatchToProps)(Admin);
