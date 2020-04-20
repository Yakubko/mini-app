import React, { ChangeEvent, FormEvent } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import * as constants from '../../../../store/acl/constants';
import Loader from '../../../../hoc/Loader';

// Load Store props
import { StoreProps } from './';
type State = {
    username: string;
    password: string;
};

/**
 * Sign in component
 *
 * Before show sign in form check if user is already sign in.
 */
class SignIn extends React.Component<StoreProps, State> {
    state: Readonly<State> = { username: '', password: '' };

    // Submit form
    handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        this.props.signIn(this.state.username, this.state.password);
    };

    // Change state from form
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [event.target.name]: event.target.value,
        } as Pick<State, keyof State>);
    };

    componentDidMount() {
        // Detect if user is allready signed in
        this.props.fetchAclData();
    }

    render() {
        // Waiting for redux middleware this.props.fetchAclData
        if ([constants.STATUS_EMPTY, constants.STATUS_AUTHORIZING].includes(this.props.status)) {
            return <Loader />;
        }

        // If user is signed in redirect to dashboard
        else if (this.props.status === constants.STATUS_AUTHORIZED) {
            return <Redirect to={{ pathname: '/dashboard' }} />;
        }

        // Create error message
        const errorMessageDiv = this.props.error && <div className="text-danger mb-2">{this.props.error}</div>;

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Sign In</h3>
                        {errorMessageDiv}

                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
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
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        {/* Disable button after submit */}
                        {this.props.status === constants.STATUS_SIGNING_IN ? (
                            <button className="btn btn-primary shadow-2 mb-4 btn-block" disabled>
                                <span className="spinner-border spinner-border-sm mr-2" role="status" />
                                Sign in
                            </button>
                        ) : (
                            <button className="btn btn-primary shadow-2 mb-4 btn-block">Sign in</button>
                        )}
                        <br />
                        <p className="mb-0 text-muted">
                            Don’t have an account? <NavLink to="/signUp">Sign up</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;
