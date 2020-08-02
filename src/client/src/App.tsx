import React, { ReactElement } from 'react';
// import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import '../node_modules/font-awesome/scss/font-awesome.scss';

import ScrollToTop from './Hoc/ScrollToTop';
import Routes from './Routes';

function App(): ReactElement {
    return (
        <>
            <ScrollToTop>
                <Routes />
            </ScrollToTop>
        </>
    );
}

export default App;
