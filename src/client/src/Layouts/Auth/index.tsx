import React, { Suspense, ReactNode, ReactElement } from 'react';

import Loader from 'Hoc/Loader';

import 'assets/scss/style.scss';

type Props = {
    children: ReactNode;
};

function Auth({ children }: Props): ReactElement {
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
}

export default Auth;
