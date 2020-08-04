import React, { ReactElement } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';

import { setSignedIn } from '../../../Store/Auth/actions';

type Inputs = {
    username: string;
    password: string;
};

function SignIn(): ReactElement {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, errors, formState, handleSubmit } = useForm<Inputs>({
        mode: 'onChange',
    });
    const { isSubmitting } = formState;

    const inputsClasses = {
        username: `form-control${errors.username ? ' is-invalid' : ''}`,
        password: `form-control${errors.password ? ' is-invalid' : ''}`,
    };

    const onSubmit = async (data: Inputs): Promise<undefined> => {
        return new Promise((resolve) => {
            axios
                .post('/api/v1/sign-in', data, { headers: { 'Content-Type': 'application/json' } })
                .then(() => {
                    resolve();

                    // localStorage.setItem('token', response.data.token);
                })
                .catch((err: AxiosError<any>) => {
                    console.log(err);
                    setTimeout(() => {
                        dispatch(setSignedIn({}));
                        resolve();
                        history.push('/dashboard');
                    }, 2000);
                });
        });
    };

    return (
        <>
            <div className="card">
                <div className="card-body text-center">
                    <div className="mb-4">
                        <i className="feather icon-unlock auth-icon" />
                    </div>
                    <h3 className="mb-4">Sign in</h3>
                    <div className="text-danger mb-2">Error</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                name="username"
                                className={inputsClasses.username}
                                placeholder="Username"
                                disabled={isSubmitting}
                                ref={register({ required: true })}
                            />
                        </div>
                        <div className="input-group mb-4">
                            <input
                                name="password"
                                type="password"
                                className={inputsClasses.password}
                                placeholder="Password"
                                disabled={isSubmitting}
                                ref={register({ required: true })}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary shadow-2 mb-4" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <span className="spinner-border spinner-border-sm mr-2" role="status" />
                            ) : null}
                            Sign in
                        </button>
                    </form>
                    <p className="mb-2 text-muted">
                        Don’t have an account? <Link to="/registration">Sign up</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignIn;
