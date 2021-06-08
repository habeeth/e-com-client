import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from "../../actions";
/**
* @author habeeth.s
* @function Header
**/

const Header = (props) => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout())
  }

  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        {/* The "to" props must be provided with the "/" at the beginning as shown above. */}
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">Signup</NavLink>
        </li>
      </Nav>
    )
  }
  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link" onClick={logout}>Signout</span>
          {/* <NavLink className="nav-link" onClick={logout}>Signout</NavLink> */}
        </li>
      </Nav>
    )

  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{ zIndex: 1 }}>
      <Container fluid>
        {/* <Navbar.Brand href="#home">E-com Admin Dashboard</Navbar.Brand> */}
        <Link to="/" className="navbar-brand">E-com Admin Dashboard</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          {
            auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

