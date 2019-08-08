import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Badge, Nav, Navbar } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import { Link, Redirect } from 'react-router-dom'
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
          {!isLoggedIn && (
            <>
              <Navbar.Brand>ELPoputcio</Navbar.Brand>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/home">
                {' '}
                <Navbar.Brand>ELPoputcio</Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" />
                <Nav>
                  <Nav.Item>
                    {isAdministrator && (
                      <Link to="/statistics" className="nav-link">
                        Statistics
                      </Link>
                    )}
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/notifications" className="nav-link">
                      Notifications
                      <Badge variant="info">{userInfo.amountOfNotifications!==0?userInfo.amountOfNotifications:""}</Badge>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/routes" className="nav-link">
                      Routes
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/profile" className="nav-link">
                      {userInfo.username}
                    </Link>
                  </Nav.Item>
                  <Nav.Item className="nav-link">
                    <span
                      className="oi oi-account-logout"
                      onClick={userLogOut}
                    />
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Navbar>
      </header>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
