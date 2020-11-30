import React, { ReactElement } from 'react';

import { MenuItem } from '../../menu-items';

type Props = {
    item: MenuItem;
};

function NavBadge({ item: { badge } }: Props): ReactElement {
    let navBadges = <></>;

    if (badge) {
        const badgeClass = ['label', 'pcoded-badge', badge.type];

        navBadges = <span className={badgeClass.join(' ')}>{badge.title}</span>;
    }

    return navBadges;
}

export default NavBadge;
