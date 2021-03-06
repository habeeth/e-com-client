    import React, { useEffect, useState } from 'react'
    import { Container, Form, Button, Row, Col } from 'react-bootstrap';
    import Layout from '../../components/Layouts/Index';
    import Input from '../../components/UI/Input/Index';
    import { login } from '../../actions'
    import { useDispatch, useSelector } from 'react-redux';
    import { Redirect } from 'react-router-dom';

    /**
    * @author
    * @function Signin
    **/


    const Signin = (props) => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('')
        const [error, setError] = useState('');
        const auth = useSelector(state => state.auth);// alternate to mapStateToProps
        const dispatch = useDispatch();


        const userLogin = (e) => {
            e.preventDefault();
            const user = {
                email, password
            }
            dispatch(login(user));
        }
        console.log("signin index", auth);

        if (auth.authenticate) {
            return <Redirect to={`/`} />
        }
        if (auth.authenticating) {
            return <p>Loading...</p>
        }
        return (
            <Layout>
                <Container>
                    <Row style={{ marginTop: '60px' }}>
                        <Col md={{ span: 4, offset: 6 }}>
                            <Form onSubmit={userLogin}>
                                <Input
                                    label="Email"
                                    placeholder="Enter your Email"
                                    value={email}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    label="Password"
                                    placeholder="Enter password"
                                    value={password}
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
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

    export default Signin;