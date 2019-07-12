import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import '../styles.sass'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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
            <Link to="/routes">
              <Nav.Link href="#routes">Routes</Nav.Link>
            </Link>
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
