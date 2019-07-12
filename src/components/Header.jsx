import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import '../styles.sass'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">CarPool</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#stats" onClick={() => alert('Stats')}>
              Statistics
            </Nav.Link>
            <Nav.Link
              href="#notifications"
              onClick={() => alert('Notifications')}
            >
              Notifications
            </Nav.Link>
            <Nav.Link href="#routes" onClick={() => alert('Routes')}>
              Routes
            </Nav.Link>
            <Nav.Link href="#user" onClick={() => alert('User')}>
              Username
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header
