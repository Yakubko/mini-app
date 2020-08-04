import React, { ReactElement } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function SamplePage(): ReactElement {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Hello Card</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default SamplePage;
