import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { withRouter } from 'react-router-dom';

// eslint-disable-next-line import/no-cycle
import NavCollapse from './NavCollapse';
import { StateProps, DispatchProps } from './types';

import State from '../../../../../../Store/state';
import { collapseToggle, CollapseToggle } from '../../../../../../Store/Gui/actions';

const mapStateToProps = (state: State): StateProps => {
    return {
        isOpen: state.gui.isOpen,
        isTrigger: state.gui.isTrigger,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, any>): DispatchProps => {
    return {
        onCollapseToggle: (id, type): CollapseToggle => dispatch(collapseToggle(id, type)),
    };
};

export default connect<StateProps, DispatchProps, {}, State>(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(NavCollapse));
