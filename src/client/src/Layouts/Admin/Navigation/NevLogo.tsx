import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import State from 'Store/state';
import { collapseMenu } from 'Store/Gui/actions';

function NavLogo(): ReactElement {
    const dispatch = useDispatch();
    const collapse = useSelector<State, State['gui']['collapseMenu']>((state) => state.gui.collapseMenu);

    const toggleClass = ['mobile-menu'];
    if (collapse) toggleClass.push('on');

    return (
        <>
            <div className="navbar-brand header-logo">
                <a href="#!" className="b-brand">
                    <div className="b-bg">
                        <i className="feather icon-trending-up" />
                    </div>
                    <span className="b-title">Datta Able</span>
                </a>
                <a
                    href="#!"
                    className={toggleClass.join(' ')}
                    id="mobile-collapse"
                    onClick={(): void => {
                        dispatch(collapseMenu());
                    }}
                >
                    <span />
                </a>
            </div>
        </>
    );
}

export default NavLogo;
