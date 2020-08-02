import React, { Suspense, ReactNode, FunctionComponent } from 'react';

import Loader from '../../../Hoc/Loader';

import '../../../assets/scss/style.scss';

const AuthLayout: FunctionComponent<ReactNode> = ({ children }) => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r" />
                            <span className="r s" />
                            <span className="r s" />
                            <span className="r" />
                        </div>
                        {children}
                    </div>
                </div>
            </Suspense>
        </>
    );
};

export default AuthLayout;
