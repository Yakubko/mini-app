import React, { ReactElement, useState } from 'react';

import Form from './Form';
import SignedUp from './SignedUp';

function SignUp(): ReactElement {
    const [singedUp, setSingedUp] = useState(false);

    if (singedUp) {
        return <SignedUp />;
    }

    return (
        <>
            <div className="card">
                <div className="card-body text-center">
                    <div className="mb-4">
                        <i className="feather icon-user-plus auth-icon" />
                    </div>
                    <h3 className="mb-4">Sign up</h3>
                    <Form setSingedUp={setSingedUp} />
                </div>
            </div>
        </>
    );
}

export default SignUp;
