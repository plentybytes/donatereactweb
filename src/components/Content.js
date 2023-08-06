import React, {Component} from 'react';
import {Accordion, Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

class Content extends Component {
    render() {
        return (
            <Container>
                <br/>
                <Form>
                    <Accordion defaultActiveKey="0">

                        <br/>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Add news Links</Accordion.Header>
                            <Accordion.Body>
                                <div>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            Media Link
                                        </InputGroup.Text>
                                        {/* eslint-disable-next-line react/jsx-no-undef */}
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            Media Link
                                        </InputGroup.Text>
                                        {/* eslint-disable-next-line react/jsx-no-undef */}
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon3">
                                            Media Link
                                        </InputGroup.Text>
                                        {/* eslint-disable-next-line react/jsx-no-undef */}
                                        <Form.Control id="basic-url" aria-describedby="basic-addon3"/>
                                    </InputGroup>


                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <br/>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Select Client and Style</Accordion.Header>
                            <Accordion.Body>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Form.Select aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col>

                                        </Col>
                                    </Row>
                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                        <br/>
                        <Accordion.Item eventKey="2" alwaysOpen>
                            <Accordion.Header>Copy News Letter</Accordion.Header>
                            <Accordion.Body>

                                <Container style={{backgroundColor: "yellow"}}>
                                    <Row>
                                        <Col>
                                            <h1>Client Logo</h1>
                                        </Col>
                                        <Col>
                                            News Letter
                                            Date ::
                                        </Col>
                                        <Col>
                                            <h2>PR Logo</h2>
                                        </Col>
                                    </Row>

                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Special title treatment</Card.Title>
                                            <Card.Text>
                                                With supporting text below as a natural lead-in to additional content.
                                            </Card.Text>
                                            <Card.Link href="#">Another Link</Card.Link>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header as="h5">Featured</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Special title treatment</Card.Title>
                                            <Card.Text>
                                                With supporting text below as a natural lead-in to additional content.
                                            </Card.Text>
                                            <Card.Link href="#">Another Link</Card.Link>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Special title treatment</Card.Title>
                                            <Card.Text>
                                                With supporting text below as a natural lead-in to additional content.
                                            </Card.Text>
                                            <Card.Link href="#">Another Link</Card.Link>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Special title treatment</Card.Title>
                                            <Card.Text>
                                                With supporting text below as a natural lead-in to additional content.
                                            </Card.Text>
                                            <Card.Link href="#">Another Link</Card.Link>
                                        </Card.Body>
                                    </Card>

                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Form>

            </Container>
        )
    }
}

export default Content;