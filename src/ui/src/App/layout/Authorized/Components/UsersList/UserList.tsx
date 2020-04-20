import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';

import { StoreProps } from './';
type State = {
    members: { username: string; full_name: string }[];
};

/**
 * User list component
 *
 * Show list of all signed up user and allow delete them.
 */
class UsersList extends Component<StoreProps, State> {
    state: Readonly<State> = {
        members: [],
    };

    /**
     * Delete user by username
     *
     * @param name      - Username who we want delete
     */
    deleteMember(name: string) {
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios
                .delete('/api/v1/users/' + name)
                .then(() => {
                    this.loadMembers();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    /**
     * Load users list
     */
    loadMembers() {
        axios
            .get('/api/v1/users')
            .then((res: AxiosResponse<{ result: { data: State['members'] } }>) => {
                const members = res.data.result.data;
                this.setState({ members });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.loadMembers();
    }

    render() {
        return (
            <>
                <h1>Users list</h1>
                <div className="card">
                    <div className="card-header">Registred users</div>
                    <div className="card-body p-0">
                        <table className="table table-bordered m-0">
                            <thead>
                                <tr className="table-primary">
                                    <th scope="col">#</th>
                                    <th scope="col">Full name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.members.map((member, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{member.full_name}</td>
                                        <td>{member.username}</td>
                                        <td>
                                            {/* If user is same as signed in user, hide delete button */}
                                            {this.props.aclData?.user?.username === member.username ? (
                                                ''
                                            ) : (
                                                <button className="btn btn-sm btn-danger" onClick={() => this.deleteMember(member.username)}>
                                                    Delete
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default UsersList;
