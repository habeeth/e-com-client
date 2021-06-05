import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Index';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container>
        {props.children}
      </Container>

    </>
  );

};

export default Layout;