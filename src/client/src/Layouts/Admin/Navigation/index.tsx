import React, { ReactElement } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import State from 'Store/state';

import useWindowSize from 'Hooks/useWindowSize';

import NavLogo from './NevLogo';
import NavContent from './NavContent';
import OutsideClick from './OutsideClick';
import navigation from '../menu-items';

type SelectorReturn = {
    collapseMenu: State['gui']['collapseMenu'];
    navFixedLayout: State['gui']['navFixedLayout'];
    boxLayout: State['gui']['boxLayout'];
};

function Navigation(): ReactElement {
    const { collapseMenu, navFixedLayout, boxLayout } = useSelector<State, SelectorReturn>((state) => {
        return {
            collapseMenu: state.gui.collapseMenu,
            navFixedLayout: state.gui.navFixedLayout,
            boxLayout: state.gui.boxLayout,
        };
    }, shallowEqual);
    const { width } = useWindowSize();

    let navClass = ['pcoded-navbar', 'drp-icon-style1', 'menu-item-icon-style1', 'active-default', 'title-default'];

    if (!navFixedLayout) {
        navClass = [...navClass, 'menupos-static'];
    }

    if (width < 992 && collapseMenu) {
        navClass = [...navClass, 'mob-open'];
    } else if (collapseMenu) {
        navClass = [...navClass, 'navbar-collapsed'];
    }

    if (boxLayout) {
        document.body.classList.add('container');
        document.body.classList.add('box-layout');
    } else {
        document.body.classList.remove('container');
        document.body.classList.remove('box-layout');
    }

    let navContent = (
        <div className="navbar-wrapper">
            <NavLogo />
            <NavContent navigation={navigation} />
        </div>
    );
    if (width < 992) {
        navContent = (
            <OutsideClick>
                <div className="navbar-wrapper">
                    <NavLogo />
                    <NavContent navigation={navigation} />
                </div>
            </OutsideClick>
        );
    }

    return (
        <>
            <nav className={navClass.join(' ')}>{navContent}</nav>
        </>
    );
}

export default Navigation;
