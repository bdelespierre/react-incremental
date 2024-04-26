import React, { useContext } from 'react';
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';
import EntropyContext from './EntropyContext';
import { currency } from './Helpers';

export default function AppHeader() {
  const { entropy } = useContext(EntropyContext);

  return (
    <Navbar key="sm" expand="sm" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" className="border-0 ps-0" />
        <Navbar.Brand href="#" className="flex-grow-1">Universal Idle</Navbar.Brand>
        <Navbar.Text>
          <div style={{ background: "#212529", paddingLeft: ".3rem", paddingRight: ".3rem", borderRadius: "3px" }}>
            Entropy <span className="font-monospace" style={{ color: "gold" }}>{currency(entropy)}</span>
          </div>
        </Navbar.Text>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Generators</Nav.Link>
              <Nav.Link href="#action2">Tech</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
