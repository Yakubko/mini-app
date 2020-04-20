import React, { FunctionComponent } from 'react';

import { StoreProps } from './';

/**
 * Dashboard component
 *
 * Just say Hi and logged user name
 *
 * @param props
 */
const Dashboard: FunctionComponent<StoreProps> = (props) => {
    return (
        <>
            <h1>Dashboard</h1>
            <div className="card">
                <div className="card-header">Welcome</div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>
                            Hi <b>{props.aclData?.user?.full_name}</b>
                        </p>
                    </blockquote>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
