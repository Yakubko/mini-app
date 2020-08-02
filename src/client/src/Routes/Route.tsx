/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import AuthLayout from '../Pages/_layouts/Auth';
import AdminLayout from '../Pages/_layouts/Admin';
// import Loader from '../Hoc/Loader';

type CustomRouteProps = { isPrivate?: boolean } & RouteProps;

export default function RouteWrapper({ component: Component, isPrivate, ...rest }: CustomRouteProps): ReactElement {
    const signed = true;

    // return <Loader />;

    if (isPrivate && !signed) {
        return <Redirect to="/" />;
    }

    if (!isPrivate && signed) {
        // return <Redirect to="/dashboard" />;
    }

    const Layout = isPrivate ? AdminLayout : AuthLayout;

    return (
        <Route
            {...rest}
            render={(props): ReactElement => {
                return Component ? (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                ) : (
                    <></>
                );
            }}
        />
    );
}
