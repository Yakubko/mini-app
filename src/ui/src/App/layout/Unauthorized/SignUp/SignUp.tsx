import React, { ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import { NavLink, Redirect } from 'react-router-dom';

import * as constants from '../../../../store/acl/constants';
import Loader from '../../../../hoc/Loader';

// Load Store props
import { StoreProps } from './';
type State = {
    error?: string;
    processing: boolean;
    user: {
        full_name: string;
        username: string;
        password: string;
    };
};

/**
 * Sign up component
 *
 * After success sign up automaticaly sign in. Don't check if user is already sign in.
 */
class SignUp extends React.Component<StoreProps, State> {
    state: Readonly<State> = { user: { full_name: '', username: '', password: '' }, processing: false };

    // Submit form
    handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        this.setState({ error: undefined, processing: true });
        console.log(this.state.user);
        axios
            .post<State>('/api/v1/signup', this.state.user)
            .then(() => {
                // After success signup do auto-sign in
                this.props.signIn(this.state.user.username, this.state.user.password);
            })
            .catch((err: AxiosError<any>) => {
                // Show error
                this.setState({ error: err.response?.data?.message, processing: false });
            });
    };

    // Change state from form
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const user = {
            ...this.state.user,
            [event.target.name]: event.target.value,
        } as Pick<State['user'], keyof State['user']>;

        this.setState({ user });
    };

    render() {
        // After success sign up wait for sign in
        if ([constants.STATUS_AUTHORIZING].includes(this.props.status)) {
            return <Loader />;
        }
        // When successfully sign in redirect to dashboard
        else if (this.props.status === constants.STATUS_AUTHORIZED) {
            return <Redirect to={{ pathname: '/dashboard' }} />;
        }
        const errorMessageDiv = this.state.error ? <div className="text-danger mb-2">{this.state.error}</div> : '';

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Sign up</h3>
                        {errorMessageDiv}

                        <div className="form-group">
                            <label>Full name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full name"
                                name="full_name"
                                value={this.state.user.full_name}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                value={this.state.user.username}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="password"
                                name="password"
                                value={this.state.user.password}
                                onChange={this.handleChange}
                            />
                        </div>

                        {/* Disable button after submit */}
                        {this.state.processing ? (
                            <button className="btn btn-primary shadow-2 mb-4 btn-block" disabled>
                                <span className="spinner-border spinner-border-sm mr-2" role="status" />
                                Submit
                            </button>
                        ) : (
                            <button className="btn btn-primary shadow-2 mb-4 btn-block">Submit</button>
                        )}
                        <br />
                        <p className="mb-0 text-muted">
                            Do you have an account? <NavLink to="/signIn">Sign in</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
