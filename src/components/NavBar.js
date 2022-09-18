import React from 'react'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>HomePage</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
            <Nav.Link as={Link} to={'/pictures'}>Pictures</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default NavBar