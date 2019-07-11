import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">CarPool</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#features">Statistics</Nav.Link>
            <Nav.Link href="#pricing">Notifications</Nav.Link>
            <Nav.Link href="#deets">Routes</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Username
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header