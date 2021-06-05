import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from '../../components/Layouts/Index';
import Input from '../../components/UI/Input/Index';


/**
* @author
* @function Signup
**/

const Signup = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 6 }}>
                        <Row>
                            <Col md={6}>
                                <Input
                                    label="First Name"
                                    placeholder="Enter your First Name"
                                    value=""
                                    type="text"
                                    onChange={() => { }}
                                />
                            </Col>
                            <Col md={6}>
                                <Input
                                    label="Last Name"
                                    placeholder="Enter your Last Name"
                                    value=""
                                    type="text"
                                    onChange={() => { }}
                                />
                            </Col>
                        </Row>
                        <Form>
                            <Input
                                label="Email"
                                placeholder="Enter your Email"
                                value=""
                                type="email"
                                onChange={() => { }}
                            />
                            <Input
                                label="Password"
                                placeholder="Enter password"
                                value=""
                                type="password"
                                onChange={() => { }}
                            />
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Estoy de acuerdo con los términos y condiciones**" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )

}

export default Signup;