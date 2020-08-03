import React, { Suspense, Component, ReactElement } from 'react';

import './app.scss';

import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import Loader from '../../Hoc/Loader';

import { StoreProps } from './types';

class Admin extends Component<StoreProps> {
    componentDidMount(): void {
        const { windowWidth, actionCollapseMenu } = this.props;

        if (windowWidth > 992 && windowWidth <= 1024) {
            actionCollapseMenu();
        }
    }

    render(): ReactElement {
        const { children } = this.props;

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
}

export default Admin;
