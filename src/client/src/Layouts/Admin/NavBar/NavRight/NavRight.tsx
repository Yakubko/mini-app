import React, { ReactElement } from 'react';
import { Dropdown } from 'react-bootstrap';

import Avatar1 from 'assets/images/user/avatar-1.jpg';
import Avatar2 from 'assets/images/user/avatar-2.jpg';
import Avatar3 from 'assets/images/user/avatar-3.jpg';

import { Props } from './types';

function NavRight(props: Props): ReactElement {
    const { authData } = props;
    let fullName = '';
    if (authData) {
        fullName = authData.full_name;
    }

    const logOut = (): void => {
        localStorage.removeItem('token');
        window.location.pathname = '/';
    };

    return (
        <>
            <ul className="navbar-nav ml-auto">
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="link" id="dropdown-basic">
                            <i className="icon feather icon-bell" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight className="notification">
                            <div className="noti-head">
                                <h6 className="d-inline-block m-b-0">Notifications</h6>
                                <div className="float-right">
                                    <a href="#!" className="m-r-10">
                                        mark as read
                                    </a>
                                    <a href="#!">clear all</a>
                                </div>
                            </div>
                            <ul className="noti-body">
                                <li className="n-title">
                                    <p className="m-b-0">NEW</p>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src={Avatar1} alt="Generic placeholder" />
                                        <div className="media-body">
                                            <p>
                                                <strong>John Doe</strong>
                                                <span className="n-time text-muted">
                                                    <i className="icon feather icon-clock m-r-10" />
                                                    30 min
                                                </span>
                                            </p>
                                            <p>New ticket Added</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="n-title">
                                    <p className="m-b-0">EARLIER</p>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src={Avatar2} alt="Generic placeholder" />
                                        <div className="media-body">
                                            <p>
                                                <strong>Joseph William</strong>
                                                <span className="n-time text-muted">
                                                    <i className="icon feather icon-clock m-r-10" />
                                                    30 min
                                                </span>
                                            </p>
                                            <p>Prchace New Theme and make payment</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src={Avatar3} alt="Generic placeholder" />
                                        <div className="media-body">
                                            <p>
                                                <strong>Sara Soudein</strong>
                                                <span className="n-time text-muted">
                                                    <i className="icon feather icon-clock m-r-10" />
                                                    30 min
                                                </span>
                                            </p>
                                            <p>currently login</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="noti-footer">
                                <a href="#!">show all</a>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown className="drp-user">
                        <Dropdown.Toggle variant="link" id="dropdown-basic">
                            <i className="icon feather icon-settings" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight className="profile-notification">
                            <div className="pro-head">
                                <img src={Avatar1} className="img-radius" alt="User Profile" />
                                <span>{fullName}</span>
                                <button
                                    type="button"
                                    className="btn btn-link dud-logout pr-3"
                                    title="Logout"
                                    onClick={logOut}
                                >
                                    <i className="feather icon-log-out" />
                                </button>
                            </div>
                            <ul className="pro-body">
                                <li>
                                    <a href="/profile" className="dropdown-item">
                                        <i className="feather icon-user" /> Profile
                                    </a>
                                </li>
                            </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </>
    );
}

export default NavRight;
