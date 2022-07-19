import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function MyNavbar(props){
    return(
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/master/inventory">Inventory</Nav.Link>
            <Nav.Link href="#link">Supplier</Nav.Link>
            <Nav.Link href="#link">Customer</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}

export default MyNavbar;