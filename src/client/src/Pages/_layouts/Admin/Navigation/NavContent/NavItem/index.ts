import { forwardRef } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import windowSize from 'react-window-size';

import NavItem from './NavItem';
import { DispatchProps } from './types';

import State from '../../../../../../Store/state';
import { collapseMenu, CollapseMenu } from '../../../../../../Store/Gui/actions';

const mapDispatchToProps = (dispatch: ThunkDispatch<State, undefined, any>): DispatchProps => {
    return {
        onItemClick: (): CollapseMenu => dispatch(collapseMenu()),
    };
};

export default connect<{}, DispatchProps, {}, State>(null, mapDispatchToProps)(windowSize(forwardRef(NavItem)));
