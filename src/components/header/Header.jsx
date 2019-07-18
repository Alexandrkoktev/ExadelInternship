import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Nav, Navbar } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown'

class Header extends React.Component {
  render() {
    const { userinfo } = this.props
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Link to="/">
          <Navbar.Brand>CarPool</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="#stats" onClick={() => alert('Stats')}>
              Statistics
            </Nav.Link>
            <Nav.Link href="#notifications">Notifications</Nav.Link>
            <Nav.Link href="/routes">Routes</Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {userinfo.firstName}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile/">Profile</Dropdown.Item>
                <Dropdown.Item href="/">LogOut</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  userinfo: state.userinfo,
})
export default connect(mapStateToProps)(Header)
