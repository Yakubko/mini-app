import React, { lazy, Suspense, ReactElement } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Loader from '../Hoc/Loader';
import Route from './Route';

const SignIn = lazy(() => import('../Pages/Auth/SignIn'));
const SignUp = lazy(() => import('../Pages/Auth/SignUp'));

const Dashboard = React.lazy(() => import('../Demo/Dashboard/Default'));

const OtherSample = React.lazy(() => import('../Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('../Demo/Other/Docs'));

export default function Routes(): ReactElement {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/registration" exact component={SignUp} />

                <Route path="/dashboard" component={Dashboard} isPrivate />
                <Route path="/sample-page" exact component={OtherSample} isPrivate />
                <Route path="/docs" exact component={OtherDocs} isPrivate />

                <Redirect to="/" />
            </Switch>
        </Suspense>
    );
}
