import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Create side bar menu
 */
class SideBar extends Component<{}, {}> {
    render() {
        return (
            <div className="card">
                <div className="list-group list-group-flush">
                    <NavLink to="/dashboard" className="list-group-item list-group-item-action" exact={true}>
                        Dashboard
                    </NavLink>
                    <NavLink to="/usersList" className="list-group-item list-group-item-action" exact={true}>
                        Users list
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default SideBar;
