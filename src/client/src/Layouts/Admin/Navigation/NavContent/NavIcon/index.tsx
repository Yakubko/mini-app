import React, { ReactElement } from 'react';

import { MenuItem } from '../../../menu-items';

type Props = {
    item: MenuItem;
};

function NavIcon({ item: { icon } }: Props): ReactElement {
    let navIcons = <></>;

    if (icon) {
        navIcons = (
            <span className="pcoded-micon">
                <i className={icon} />
            </span>
        );
    }

    return navIcons;
}

export default NavIcon;
