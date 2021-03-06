import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Index';
import './layout.css';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return (
    <>
      <Header />
      {
        props.sidebar ?
          <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><NavLink exact to={`/`}>Home</NavLink></li>
                  <li><NavLink to={`/products`}>Products</NavLink></li>
                  <li><NavLink to={`/category`}>Categories</NavLink></li>
                  <li><NavLink to={`/orders`}>Orders</NavLink></li>
                </ul>
              </Col>
              <Col md={10} className="main">{props.children}</Col>
              {/* <Col md={2} style={{ marginLeft: 'auto' }}>Ad</Col> */}
            </Row>
          </Container>
          : props.children
      }
    </>
  );

};

export default Layout;