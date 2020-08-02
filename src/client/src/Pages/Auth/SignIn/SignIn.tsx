import React, { Component, ReactElement, FormEvent, ChangeEvent } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { StoreProps } from './types';
import { STATE_AUTHORIZING, STATE_EMPTY, STATE_AUTHORIZED, STATE_SIGNING_IN } from '../../../Store/Auth/constants';
import Loader from '../../../Hoc/Loader';

type State = {
    username: string;
    password: string;
};

class SignIn extends Component<StoreProps, State> {
    constructor(props: StoreProps) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(): void {
        const { fetchAuthUser } = this.props;

        fetchAuthUser();
    }

    // Submit form
    handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        const { signIn } = this.props;
        const { username, password } = this.state;

        signIn(username, password);
    };

    // Change state from form
    handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            [event.target.name]: event.target.value,
        } as Pick<State, keyof State>);
    };

    render(): ReactElement {
        const { state, error } = this.props;
        const { username, password } = this.state;

        // // Waiting for redux middleware this.props.fetchAclData
        // if ([STATE_EMPTY, STATE_AUTHORIZING].includes(state)) {
        //     return <Loader />;
        // }

        // If user is signed in redirect to dashboard
        // if (state === STATE_AUTHORIZED) {
        //     return <Redirect to={{ pathname: '/dashboard' }} />;
        // }

        const errorMessageDiv = error && <div className="text-danger mb-2">{error}</div>;

        return (
            <>
                <div className="card">
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-unlock auth-icon" />
                        </div>
                        <h3 className="mb-4">Sign in</h3>
                        {errorMessageDiv}
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="User name"
                                    name="username"
                                    value={username}
                                    onChange={this.handleChange}
                                    disabled={state === STATE_SIGNING_IN}
                                />
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    disabled={state === STATE_SIGNING_IN}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary shadow-2 mb-4"
                                disabled={state === STATE_SIGNING_IN}
                            >
                                {state === STATE_SIGNING_IN ? (
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
}

export default SignIn;
