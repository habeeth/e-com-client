import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../../actions';
import Layout from '../../components/Layouts/Index';
import Input from '../../components/UI/Input/Index';


/**
* @author
* @function Signup
**/

const Signup = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.user);
    const auth = useSelector(state => state.auth);// alternate to mapStateToProps
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        const user = { firstName, lastName, email, password };
        dispatch(signup(user));
    }
    if (user.loading) {
        return <p>Loading...</p>
    }
    // if (auth.authenticate) {
    //     return <Redirect to={`/`} />
    // }
    
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 6 }}>
                        <Form onSubmit={submit}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="Enter your First Name"
                                        value={firstName}
                                        type="text"
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Enter your Last Name"
                                        value={lastName}
                                        type="text"
                                        onChange={(e) => { setLastName(e.target.value) }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Input
                                        label="Email"
                                        placeholder="Enter your Email"
                                        value={email}
                                        type="email"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Input
                                        label="Password"
                                        placeholder="Enter password"
                                        value={password}
                                        type="password"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                </Col>
                            </Row>
                            <Form.Group>
                                <Form.Check type="checkbox" label="Estoy de acuerdo con los términos y condiciones**" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <p>{user && user.message}</p>
                            <p>{user && user.error}</p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )

}

export default Signup;