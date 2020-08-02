import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

function SignedUp(): ReactElement {
    return (
        <>
            <div className="card">
                <div className="card-body text-center">
                    <h3 className="mb-4">Congratulation!</h3>
                    <p>You have been successfully registered. Please continue to sign in page.</p>
                    <div>
                        <Link to="/" className="btn btn-primary shadow-2 text-white">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignedUp;
