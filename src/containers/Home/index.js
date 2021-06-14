import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layouts/Index';
import "./style.css";
/**
* @author habeeth.s
* @function Home
**/

const Home = (props) => {
    return (

        <Layout sidebar>

            <Jumbotron className="text-center">
                <h4>Welcome to Admin Dashboard</h4>
            </Jumbotron>
        </Layout >
    )

}

export default Home;