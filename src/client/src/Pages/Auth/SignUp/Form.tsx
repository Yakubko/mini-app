import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type Inputs = {
    username: string;
    password: string;
    password_confirm: string;
};

type Props = {
    setSingedUp: Dispatch<SetStateAction<boolean>>;
};

function Form(props: Props): ReactElement {
    const { register, watch, errors, setError, clearErrors, formState, handleSubmit } = useForm<Inputs>({
        mode: 'onChange',
    });
    const { touched, isSubmitting } = formState;

    const inputsClasses = {
        username: `form-control${errors.username ? ' is-invalid' : ''}`,
        password: `form-control${errors.password ? ' is-invalid' : ''}`,
        passwordConfirm: `form-control${
            errors.password_confirm && (touched.password_confirm || errors.password_confirm.type === 'required')
                ? ' is-invalid'
                : ''
        }`,
    };

    const { setSingedUp } = props;

    const onSubmit = async (data: Inputs): Promise<undefined> => {
        return new Promise((resolve) => {
            axios
                .post('/api/v1/sign-up', data, { headers: { 'Content-Type': 'application/json' } })
                .then(() => {
                    resolve();
                })
                .catch((err: AxiosError<any>) => {
                    console.log(err);

                    setTimeout(() => {
                        setSingedUp(true);
                        resolve();
                    }, 4000);
                });
        });
    };

    return (
        <>
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
                        onChange={(): void => {
                            if (touched.password_confirm) {
                                if (watch('password') !== watch('password_confirm')) {
                                    setError('password_confirm', { type: 'required' });
                                } else {
                                    clearErrors('password_confirm');
                                }
                            }
                        }}
                    />
                </div>
                <div className="input-group mb-4">
                    <input
                        name="password_confirm"
                        type="password"
                        className={inputsClasses.passwordConfirm}
                        placeholder="Confirm password"
                        disabled={isSubmitting}
                        ref={register({
                            required: true,
                            validate: (value) => {
                                return value === watch('password');
                            },
                        })}
                    />
                </div>
                <button type="submit" className="btn btn-primary shadow-2 mb-4" disabled={isSubmitting}>
                    {isSubmitting ? <span className="spinner-border spinner-border-sm mr-2" role="status" /> : null}
                    Sign up
                </button>
            </form>
            <p className="mb-0 text-muted">
                Already have an account? <Link to="/">Sign in</Link>
            </p>
        </>
    );
}

export default Form;
