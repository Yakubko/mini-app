import React, { useRef, useEffect, FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const usePrevious = <T extends any>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

const ScrollToTop: FC<RouteComponentProps> = ({ children, location }) => {
    const prevLocation = usePrevious(location);
    useEffect(() => {
        if (prevLocation !== location) {
            window.scrollTo(0, 0);
        }
    }, [location, prevLocation]);

    return <>{children}</>;
};

export default withRouter(ScrollToTop);
