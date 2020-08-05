import React, { ReactElement } from 'react';

function Loader(): ReactElement {
    return (
        <div className="loader-bg">
            <div className="loader-track">
                <div className="loader-fill" />
            </div>
        </div>
    );
}

export default Loader;
