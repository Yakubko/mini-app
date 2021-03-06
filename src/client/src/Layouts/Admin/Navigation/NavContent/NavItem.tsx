/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useWindowSize from 'Hooks/useWindowSize';
import { collapseMenu } from 'Store/Gui/actions';

import NavIcon from './NavIcon';
import NavBadge from './NavBadge';

import { MenuItem } from '../../menu-items';

type Props = {
    item: MenuItem;
};

function NavItem(props: Props): ReactElement {
    const dispatch = useDispatch();
    const { item } = props;
    const { width } = useWindowSize();

    const itemTitle = item.icon ? <span className="pcoded-mtext">{item.title}</span> : item.title;
    const itemTarget = item.target ? '_blank' : '';

    let subContent;
    if (item.external) {
        subContent = (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <NavIcon item={item} />
                {itemTitle}
                <NavBadge item={item} />
            </a>
        );
    } else {
        subContent = (
            <NavLink to={item.url as string} className="nav-link" target={itemTarget}>
                <NavIcon item={item} />
                {itemTitle}
                <NavBadge item={item} />
            </NavLink>
        );
    }
    let mainContent = <></>;
    if (width < 992) {
        mainContent = (
            <li
                className={item.classes}
                onClick={(): void => {
                    dispatch(collapseMenu());
                }}
            >
                {subContent}
            </li>
        );
    } else {
        mainContent = <li className={item.classes}>{subContent}</li>;
    }

    return <>{mainContent}</>;
}

export default NavItem;
