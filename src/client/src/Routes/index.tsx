import React, { Suspense, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

import Loader from 'Hoc/Loader';
import State from 'Store/state';
import { fetchAuthUser } from 'Store/Auth/actions';

import RouteWrapper from './RouteWrapper';
import RouteItems from './route-items';

export default function Routes(): ReactElement {
    const dispatch = useDispatch();
    const authState = useSelector<State, State['auth']['state']>((state) => state.auth.state);
    const signedIn = authState === 'authorized';

    if (authState === null || authState === 'authorizing') {
        if (authState === null) {
            dispatch(fetchAuthUser());
        }

        return <Loader />;
    }

    const routes = RouteItems.map(({ path, exact, component, layout, access }) => {
        const key: string = (Array.isArray(path) ? path.concat(';') : path ?? Math.random()) as string;
        return <RouteWrapper {...{ key, path, exact, component, layout, access, signedIn }} />;
    });

    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                {routes}

                <Redirect to="/" />
            </Switch>
        </Suspense>
    );
}
