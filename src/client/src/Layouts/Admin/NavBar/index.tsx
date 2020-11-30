import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import State from 'Store/state';
import { collapseMenu } from 'Store/Gui/actions';

import NavRight from './NavRight';

function NavBar(): ReactElement {
    const dispatch = useDispatch();
    const collapse = useSelector<State, State['gui']['collapseMenu']>((state) => state.gui.collapseMenu);

    let toggleClass = ['mobile-menu'];
    if (collapse) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <>
            <header className="navbar pcoded-header navbar-expand-lg">
                <div className="m-header">
                    <a
                        className={toggleClass.join(' ')}
                        id="mobile-collapse1"
                        href="#!"
                        onClick={(): void => {
                            dispatch(collapseMenu());
                        }}
                    >
                        <span />
                    </a>
                    <a href="#!" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up" />
                        </div>
                        <span className="b-title">Datta Able</span>
                    </a>
                </div>
                <a className="mobile-menu" id="mobile-header" href="#!">
                    <i className="feather icon-more-horizontal" />
                </a>
                <div className="collapse navbar-collapse">
                    <NavRight />
                </div>
            </header>
        </>
    );
}

export default NavBar;
