import React from 'react'
import '../styles.sass'
import { Navbar } from 'react-bootstrap'

class Footer extends React.Component {
  render() {
    const FOOTER_TEXT =
      '© 2019 Exadel, Inc. | Privacy Policy | Terms & Conditions | Team4 Internship'
    return (
      <div className="fixed-bottom">
            <footer className='footer'>{FOOTER_TEXT}</footer>
      </div>
    )
  }
}

export default Footer
