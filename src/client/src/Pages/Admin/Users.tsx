import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';

import RemoteTable from 'Components/Table';
import useRestAPI from 'Hooks/useRestApi';

import State from 'Store/state';

import avatar1 from 'assets/images/user/avatar-1.jpg';

function Users(): ReactElement {
    const { data, error, loading } = useRestAPI();
    const authData = useSelector<State, State['auth']['data']>((state) => state.auth.data);

    const removeItem = (id: any): void => {
        // alert(id);
    };

    let tableContent = null;
    if (data) {
        tableContent = (
            <>
                <tbody>
                    {data.map(({ id, full_name: fullName }) => (
                        <tr key={id} className="unread">
                            <td>
                                <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" />
                            </td>
                            <td>
                                <h6 className="mb-1">{fullName}</h6>
                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                            </td>
                            <td>
                                <h6 className="text-muted">
                                    <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                    11 MAY 12:56
                                </h6>
                            </td>
                            <td className="text-right">
                                {authData?.id !== id ? (
                                    <a
                                        href="#!"
                                        onClick={(): void => {
                                            removeItem(id);
                                        }}
                                        className="label theme-bg2 text-white f-12"
                                    >
                                        Delete
                                    </a>
                                ) : (
                                    <></>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </>
        );
    }

    return (
        <>
            <Row>
                <Col>
                    <Card className="Recent-Users">
                        <Card.Header>
                            <Card.Title as="h5">Registered users</Card.Title>
                        </Card.Header>
                        <Card.Body className="px-0 py-2">
                            <RemoteTable error={error} loading={loading} responsive hover>
                                {tableContent}
                            </RemoteTable>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Users;
