import React, { FunctionComponent } from 'react';

type Props = {};

const loader: FunctionComponent<Props> = () => {
    return (
        <div className="loader-bg">
            <div className="loader-track">
                <div className="loader-fill" />
            </div>
        </div>
    );
};

export default loader;
