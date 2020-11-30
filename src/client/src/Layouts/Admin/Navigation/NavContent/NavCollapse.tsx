import React, { ReactElement, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import State from 'Store/state';
import { collapseToggle } from 'Store/Gui/actions';

// eslint-disable-next-line import/no-self-import
import LoopNavCollapse from './NavCollapse';

import NavIcon from './NavIcon';
import NavBadge from './NavBadge';
import NavItem from './NavItem';

import { MenuItem } from '../../menu-items';

type Props = {
    item: MenuItem;
    type: string;
};

type SelectorReturn = {
    isOpen: State['gui']['isOpen'];
    isTrigger: State['gui']['isTrigger'];
};

function NavCollapse(props: Props): ReactElement {
    const dispatch = useDispatch();
    const { item, type } = props;
    const { isOpen, isTrigger } = useSelector<State, SelectorReturn>((state) => {
        return { isOpen: state.gui.isOpen, isTrigger: state.gui.isTrigger };
    }, shallowEqual);
    const currentIndex = document.location.pathname
        .toString()
        .split('/')
        .findIndex((id) => id === item.id);

    useEffect(() => {
        if (currentIndex > -1) {
            dispatch(collapseToggle(item.id, type));
        }
    });

    const navItems: ReactElement[] = [];
    if (item.children) {
        item.children.forEach((subItem) => {
            if (subItem.type === 'item') navItems.push(<NavItem key={subItem.id} item={subItem} />);
            if (subItem.type === 'collapse') navItems.push(<LoopNavCollapse key={subItem.id} item={subItem} type="sub" />);
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
            <a
                href="#!"
                className={navLinkClass.join(' ')}
                onClick={(): void => {
                    dispatch(collapseToggle(item.id, type));
                }}
            >
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
