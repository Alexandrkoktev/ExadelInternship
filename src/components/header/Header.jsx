import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button } from 'react-bootstrap'

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
              <Link>Statistics</Link>
            </Button>
            <Link to="/routes">
              <Button
                variant="outline-light"
                type="submit"
                style={{ marginLeft: '1rem' }}
              >
                Routes
              </Button>
            </Link>
            <Button
              variant="outline-light"
              type="submit"
              style={{ marginLeft: '1rem' }}
            >
              <Link>Cars</Link>
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

export default Header
