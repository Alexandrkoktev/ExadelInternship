import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Nav, Navbar } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import NavDropdown from 'react-bootstrap/NavDropdown'
import { connect } from 'react-redux'
import './heade.sass'
import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../commands/authorizationCheck'

class Header extends React.Component {
  render() {
    const { userInfo, userLogOut } = this.props
    const isLoggedIn = !!userInfo.username
    const isAdministrator = userInfo.role === 'ROLE_ADMINISTRATOR'
    return (
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Link to="/home">
            <Navbar.Brand>CarPool</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          {isLoggedIn && <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"/>
            <Nav>
              <Nav.Item>
                {isAdministrator && <Link to="/statistics"  className="nav-link">
                  Statistics
                </Link>}
              </Nav.Item>
              <Nav.Item>
                <Link to="/notifications" className="nav-link">Notifications</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/routes" className="nav-link">Routes</Link>
              </Nav.Item>
              <NavDropdown title={userInfo.username} id="collapsible-nav-dropdown" drop='left down'>
                <NavDropdown.Item>
                  <Link to="/profile">profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item onClick={userLogOut}>logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>}
        </Navbar>
      </header>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
