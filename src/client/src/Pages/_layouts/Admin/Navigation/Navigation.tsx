import React, { ReactElement } from 'react';

import NavLogo from './NavLogo';
import NavContent from './NavContent';
import OutsideClick from './OutsideClick';
import navigation from '../menu-items';

import { StoreProps } from './types';

function Navigation(props: StoreProps, _ref: any): ReactElement {
    const { windowWidth, collapseMenu, navFixedLayout, boxLayout, onToggleNavigation } = props;

    let navClass = ['pcoded-navbar'];

    navClass = [...navClass, 'drp-icon-style1', 'menu-item-icon-style1', 'active-default', 'title-default'];

    if (!navFixedLayout) {
        navClass = [...navClass, 'menupos-static'];
    }

    if (windowWidth < 992 && collapseMenu) {
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
            <NavLogo collapseMenu={collapseMenu} onToggleNavigation={onToggleNavigation} />
            <NavContent navigation={navigation} />
        </div>
    );
    if (windowWidth < 992) {
        navContent = (
            <OutsideClick>
                <div className="navbar-wrapper">
                    <NavLogo collapseMenu={collapseMenu} onToggleNavigation={onToggleNavigation} />
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
