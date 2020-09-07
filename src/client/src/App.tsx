import React, { ReactElement } from 'react';

import '../node_modules/font-awesome/scss/font-awesome.scss';

import ScrollToTop from 'Hoc/ScrollToTop';
import Routes from 'Routes';

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
