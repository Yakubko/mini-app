import React, { ReactElement, forwardRef } from 'react';
import { Dropdown } from 'react-bootstrap';
import windowSize, { WindowSizeProps } from 'react-window-size';

function NavLeft(props: WindowSizeProps, _ref: any): ReactElement {
    let navItemClass = ['nav-item'];
    const { windowWidth } = props;
    if (windowWidth <= 575) {
        navItemClass = [...navItemClass, 'd-none'];
    }

    return (
        <>
            <ul className="navbar-nav mr-auto">
                <li className={navItemClass.join(' ')}>
                    <Dropdown>
                        <Dropdown.Toggle variant="link" id="dropdown-basic">
                            Dropdown
                        </Dropdown.Toggle>
                        <ul>
                            <Dropdown.Menu>
                                <li>
                                    <a className="dropdown-item" href="#!">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#!">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#!">
                                        Something else here
                                    </a>
                                </li>
                            </Dropdown.Menu>
                        </ul>
                    </Dropdown>
                </li>
            </ul>
        </>
    );
}

export default windowSize(forwardRef(NavLeft));
