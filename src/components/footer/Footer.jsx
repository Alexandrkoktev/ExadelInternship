import React from 'react'
import { Navbar } from 'react-bootstrap'

class Footer extends React.Component {
  render() {
    const FOOTER_TEXT = '© 2019 Exadel, Inc. | Team4 Internship'
    return (
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Navbar.Text>
          <footer>{FOOTER_TEXT}</footer>
        </Navbar.Text>
      </Navbar>
    )
  }
}

export default Footer
