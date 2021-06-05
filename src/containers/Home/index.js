import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layouts/Index';

/**
* @author habeeth.s
* @function Home
**/

const Home = (props) => {
    return (
        <Layout>
            <Jumbotron className="text-center">
                <h4>Welcome to Admin Dashboard</h4>
            </Jumbotron>
        </Layout>
    )

}

export default Home;