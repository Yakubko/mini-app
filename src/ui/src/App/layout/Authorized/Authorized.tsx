import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from './routes';
import Loader from '../../../hoc/Loader';
import NavBar from './NavBar';
import SideBar from './SideBar';

// Load Store props
import { StoreProps } from './';
import * as constants from '../../../store/acl/constants';

class Authorized extends Component<StoreProps, {}> {
    componentDidMount() {
        // Detect if user is allready signed in
        this.props.fetchAclData();
    }

    render() {
        // Waiting for redux middleware this.props.fetchAclData
        if ([constants.STATUS_EMPTY, constants.STATUS_AUTHORIZING].includes(this.props.acl.status)) {
            return <Loader />;
        }

        // If user is unauthorized redirect to sign in
        else if (this.props.acl.status === constants.STATUS_UNAUTHORIZED) {
            return <Redirect to={{ pathname: '/signIn' }} />;
        }

        // Generate routes for authorized user
        const menu = routes.map((route, index) => {
            return route.component ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={(props) => {
                        if (route.component) return <route.component {...props} />;
                    }}
                />
            ) : null;
        });

        return (
            <>
                <NavBar />
                <div className="row p-3">
                    <div className="col-md-3">
                        <SideBar />
                    </div>
                    <div className="col-md-9">
                        <Suspense fallback={<Loader />}>
                            <Switch>
                                {menu}
                                <Redirect from="/" to="/dashboard" />
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </>
        );
    }
}

export default Authorized;
