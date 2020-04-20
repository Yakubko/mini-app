import React, { Component } from 'react';

// From: https://www.pngitem.com/middle/wioRbJ_letter-m-png-logo-en-png-de-una/
import Logo from '../../../../assets/Logo.png';

import { StoreProps } from '.';

/**
 * Create navigation bar
 */
class NavBar extends Component<StoreProps, {}> {
    // Log out action
    logout = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        this.props.logout();

        // Redirect to sign in
        this.props.history.push('/signIn');
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="navbar-collapse collapse w-100 order-1 order-md-3 dual-collapse2">
                    <a className="navbar-brand" href="/dashboard">
                        <img src={Logo} style={{ marginRight: '10px' }} height="30" className="d-inline-block align-top" alt="" />
                        Mini APP
                    </a>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" onClick={this.logout} href="">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
