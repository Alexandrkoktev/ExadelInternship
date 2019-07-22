import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { connect } from 'react-redux'
import { logOut } from '../../commands/user'
import './heade.sass'

class Header extends React.Component {
  render() {
    const { userInfo, userLogOut } = this.props
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
              <NavDropdown title="dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/profile">profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item onClick={userLogOut}>logOut</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar>
      </header>
    )
  }

}

const mapStateToProps = state => ({
  userinfo: state.userinfo,
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