import React, { ReactElement } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import NavGroup from './NavGroup';

import { MenuItem } from '../../menu-items';

type Props = {
    navigation: MenuItem[];
};

function NavContent(props: Props): ReactElement {
    const { navigation } = props;
    const navItems = navigation.map((item) => {
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
