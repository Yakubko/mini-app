import React, { ReactElement } from 'react';

import NavLeft from './NavLeft';
import NavRight from './NavRight';

import { StoreProps } from './types';

function NavBar(props: StoreProps): ReactElement {
    const { collapseMenu, onToggleNavigation } = props;

    let toggleClass = ['mobile-menu'];
    if (collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <>
            <header className="navbar pcoded-header navbar-expand-lg">
                <div className="m-header">
                    <a className={toggleClass.join(' ')} id="mobile-collapse1" href="#!" onClick={onToggleNavigation}>
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
                    <NavLeft />
                    <NavRight />
                </div>
            </header>
        </>
    );
}

export default NavBar;
