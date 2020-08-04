import React, { ReactElement, ReactNode } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import BlankLayout from '../Layouts/Blank';
import AuthLayout from '../Layouts/Auth';
import AdminLayout from '../Layouts/Admin';

export type RouteWrapperProps = RouteProps & {
    path: RouteProps['path'];
    component: RouteProps['component'];

    access?: 'private' | 'public' | 'both';
    layout?: 'blank' | 'admin' | 'auth';
    signedIn?: boolean;
};

export default function RouteWrapper({
    path,
    exact,
    component: Component,
    layout = 'blank',
    access = 'public',
    signedIn = false,
}: RouteWrapperProps): ReactElement {
    let Layout: React.ComponentType<any>;
    switch (layout) {
        case 'auth':
            Layout = AuthLayout;
            break;

        case 'admin':
            Layout = AdminLayout;
            break;

        default:
        case 'blank':
            Layout = BlankLayout;
            break;
    }

    if (access === 'private' && !signedIn) {
        return <Redirect to="/" />;
    }

    if (access === 'public' && signedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Route
            path={path}
            exact={exact}
            render={(props): ReactNode => {
                if (Component) {
                    if (Layout) {
                        return (
                            <Layout>
                                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                                <Component {...props} />
                            </Layout>
                        );
                    }

                    // eslint-disable-next-line react/jsx-props-no-spreading
                    return <Component {...props} />;
                }

                return null;
            }}
        />
    );
}
