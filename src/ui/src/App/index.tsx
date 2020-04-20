import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Loader from '../hoc/Loader';
import ScrollToTop from '../hoc/ScrollToTop';
import routes from './route';

const AdminLayout = Loadable({
    loader: () => import('./layout/Authorized'),
    loading: Loader,
});

/**
 * Main App component
 */
class App extends Component {
    render() {
        // Generate routes
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
            <ScrollToTop>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        {menu}
                        <Route path="/" component={AdminLayout} />
                    </Switch>
                </Suspense>
            </ScrollToTop>
        );
    }
}

export default App;
