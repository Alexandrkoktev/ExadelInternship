import React from 'react'
import { Navbar } from 'react-bootstrap'

class Footer extends React.Component {
  render() {
    const FOOTER_TEXT =
      '© 2019 Exadel, Inc. | Privacy Policy | Terms & Conditions | Team4 Internship'
    return (
      <div className="fixed-bottom">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <footer>{FOOTER_TEXT}</footer>
          </Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}

export default Footer;
