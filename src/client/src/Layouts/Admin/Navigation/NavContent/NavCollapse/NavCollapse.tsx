import React, { ReactElement, useEffect } from 'react';

import NavIcon from '../NavIcon';
import NavBadge from '../NavBadge';
import NavItem from '../NavItem';

// eslint-disable-next-line import/no-cycle
import LoopNavCollapse from './index';
import { StoreProps } from './types';

function NavCollapse(props: StoreProps): ReactElement {
    const {
        isOpen,
        isTrigger,
        item,
        item: { children },
        type,
        onCollapseToggle,
    } = props;
    const currentIndex = document.location.pathname
        .toString()
        .split('/')
        .findIndex((id) => id === item.id);

    useEffect(() => {
        if (currentIndex > -1) {
            onCollapseToggle(item.id, type);
        }
    });

    let navItems = null;
    if (children !== undefined) {
        navItems = Object.keys(children).map((index: any) => {
            const subItem = children[index];
            switch (subItem.type) {
                case 'item':
                    return <NavItem key={subItem.id} item={subItem} />;
                case 'collapse':
                    return <LoopNavCollapse key={subItem.id} item={subItem} type="sub" />;
                default:
                    return false;
            }
        });
    }

    let itemTitle = <>{item.title}</>;
    if (item.icon) {
        itemTitle = <span className="pcoded-mtext">{item.title}</span>;
    }

    let navLinkClass = ['nav-link'];

    let navItemClass = ['nav-item', 'pcoded-hasmenu'];
    const openIndex = isOpen.findIndex((id: any) => id === item.id);
    if (openIndex > -1) {
        navItemClass = [...navItemClass, 'active'];
        navLinkClass = [...navLinkClass, 'active'];
    }

    const triggerIndex = isTrigger.findIndex((id: any) => id === item.id);
    if (triggerIndex > -1) {
        navItemClass = [...navItemClass, 'pcoded-trigger'];
    }

    if (currentIndex > -1) {
        navItemClass = [...navItemClass, 'active'];
        navLinkClass = [...navLinkClass, 'active'];
    }

    const subContent = (
        <>
            <a href="#!" className={navLinkClass.join(' ')} onClick={(): any => onCollapseToggle(item.id, type)}>
                <NavIcon item={item} />
                {itemTitle}
                <NavBadge item={item} />
            </a>
            <ul className="pcoded-submenu">{navItems}</ul>
        </>
    );

    return <li className={navItemClass.join(' ')}>{subContent}</li>;
}

export default NavCollapse;
