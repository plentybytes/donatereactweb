import React, {Component} from 'react';
import {Accordion, Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

class DonateApp extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <br/>
                <Row className="justify-content-md-center" style={{padding: '20px'}}>
                    Start donating
                </Row>
                <br/>
                <Form>
                    <Accordion>
                        <br/>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Add Items</Accordion.Header>
                            <Accordion.Body>
                                <div>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            Item
                                        </InputGroup.Text>
                                        {/* eslint-disable-next-line react/jsx-no-undef */}
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            Item
                                        </InputGroup.Text>
                                        {/* eslint-disable-next-line react/jsx-no-undef */}
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            Item
                                        </InputGroup.Text>
                                        {/* eslint-disable-next-line react/jsx-no-undef */}
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"/>
                                    </InputGroup>


                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <br/>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Select Pickup Location</Accordion.Header>
                            <Accordion.Body>
                                <Container>

                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                        <br/>
                        <Accordion.Item eventKey="2" alwaysOpen>
                            <Accordion.Header>Complete Donation</Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Form>

            </Container>
        )
    }
}

export default DonateApp;