import React, { ReactElement } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import NavGroup from './NavGroup';

import { StoreProps } from './types';
import { MenuItem } from '../../menu-items';

function NavContent(props: StoreProps): ReactElement {
    const { navigation } = props;
    const navItems = navigation.map((item: MenuItem) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return false;
        }
    });

    return (
        <div className="navbar-content datta-scroll">
            <PerfectScrollbar>
                <ul className="nav pcoded-inner-navbar">{navItems}</ul>
            </PerfectScrollbar>
        </div>
    );
}

export default NavContent;
