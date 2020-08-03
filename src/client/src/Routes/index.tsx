import React, { Suspense, ReactElement, useState } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Loader from '../Hoc/Loader';
import RouteWrapper from './RouteWrapper';
import RouteItems from './route-items';

export default function Routes(): ReactElement {
    const [fetching, setFetching] = useState<boolean>(false);

    setTimeout(() => {
        setFetching(true);
    }, 1500);

    if (!fetching) {
        return <Loader />;
    }

    const signedIn = false;

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
