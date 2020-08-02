import React, { ReactElement } from 'react';

import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

import { MenuItem } from '../../../menu-items';

type Props = {
    item: MenuItem;
};

function navGroup({ item: { id, title, children } }: Props): ReactElement {
    let navItems = null;
    if (children) {
        navItems = Object.keys(children).map((index: any) => {
            const item = children[index];
            // console.log(item.type);
            switch (item.type) {
                case 'collapse':
                    return <NavCollapse key={item.id} item={item} type="main" />;
                case 'item':
                    return <NavItem key={item.id} item={item} />;
                default:
                    return false;
            }
        });
    }

    return (
        <>
            <li key={id} className="nav-item pcoded-menu-caption">
                <span>{title}</span>
            </li>
            {navItems}
        </>
    );
}

export default navGroup;
