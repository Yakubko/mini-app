import React, { Suspense, useEffect, ReactNode, ReactElement } from 'react';

import Loader from 'Hoc/Loader';
import useWindowSize from 'Hooks/useWindowSize';

import './app.scss';

import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import { StoreProps } from './types';

type Props = StoreProps & { children: ReactNode };

function Admin({ children, actionCollapseMenu }: Props): ReactElement {
    const { width } = useWindowSize();

    useEffect(() => {
        if (width > 992 && width <= 1024) {
            actionCollapseMenu();
        }
    });

    return (
        <>
            <Navigation />
            <NavBar />
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            <Breadcrumb />
                            <div className="main-body">
                                <div className="page-wrapper">
                                    <Suspense fallback={<Loader />}>{children}</Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;
