import React, { ReactElement } from 'react';

import State from '../../../../../Store/state';
import { CollapseMenu } from '../../../../../Store/Gui/actions';

interface Props {
    collapseMenu: State['gui']['collapseMenu'];
    onToggleNavigation: () => CollapseMenu;
}

function NavLogo(props: Props): ReactElement {
    let toggleClass = ['mobile-menu'];
    const { collapseMenu, onToggleNavigation } = props;
    if (collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <>
            <div className="navbar-brand header-logo">
                <a href="#!" className="b-brand">
                    <div className="b-bg">
                        <i className="feather icon-trending-up" />
                    </div>
                    <span className="b-title">Datta Able</span>
                </a>
                <a href="#!" className={toggleClass.join(' ')} id="mobile-collapse" onClick={onToggleNavigation}>
                    <span />
                </a>
            </div>
        </>
    );
}

export default NavLogo;
