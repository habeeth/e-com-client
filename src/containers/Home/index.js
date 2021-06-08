import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import Layout from '../../components/Layouts/Index';
import "./style.css";
/**
* @author habeeth.s
* @function Home
**/

const Home = (props) => {
    return (

        <Layout>
            <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">Sidebar</Col>
                    <Col md={8} style={{ marginLeft: 'auto' }}>Container</Col>
                    <Col md={2} style={{ marginLeft: 'auto' }}>Ad</Col>
                </Row>
            </Container>
            {/* <Jumbotron className="text-center">
                <h4>Welcome to Admin Dashboard</h4>
            </Jumbotron> */}
        </Layout >
    )

}

export default Home;