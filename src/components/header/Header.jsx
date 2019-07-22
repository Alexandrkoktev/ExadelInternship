import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { connect } from 'react-redux'

// eslint-disable-next-line no-unused-vars
import Dropdown from 'react-bootstrap/Dropdown'
import './heade.sass'
import { logOut } from '../../commands/user'
import './heade.sass'

class Header extends React.Component {
  render() {
    const { userInfo, userLogOut } = this.props
    const isLoggedIn = !!userInfo.email
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
                <Link to="#stats" onClick={() => alert('Stats')} class="nav-link">
                  Statistics
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="#notifications" class="nav-link">Notifications</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/routes" class="nav-link">Routes</Link>
              </Nav.Item>
              <NavDropdown title={userInfo.firstName} id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/profile">profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item onClick={userLogOut}>logOut</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>}
        </Navbar>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

const mapDispatchToProps = dispatch => ({
  userLogOut() {
    dispatch(logOut())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)

