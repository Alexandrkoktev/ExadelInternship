import React from 'react'
import { Button, Navbar } from 'react-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' CarPool'}
            <Button
              variant="outline-light"
              type="submit"
              style={{ marginLeft: '48rem' }}
            >
              Statistics
            </Button>
            <Button
              variant="outline-light"
              type="submit"
              style={{ marginLeft: '1rem' }}
            >
              Routes
            </Button>
            <Button
              variant="outline-light"
              type="submit"
              style={{ marginLeft: '1rem' }}
            >
              Cars
            </Button>
            <Button
              variant="outline-light"
              type="submit"
              style={{ marginLeft: '1rem' }}
            >
              Profile
            </Button>
          </Navbar.Brand>
        </Navbar>
      </>
    )
  }
}

export default Header;