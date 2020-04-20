import React, { FunctionComponent } from 'react';

/**
 * Create nice loading spinner
 */
const loader: FunctionComponent<{}> = () => {
    return (
        <div className="row h-100 text-center">
            <div className="col-sm-12 my-auto">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default loader;
