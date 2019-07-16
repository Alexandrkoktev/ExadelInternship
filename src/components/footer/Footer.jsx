import React from 'react'
import './styles.sass'
class Footer extends React.Component {
  render() {
    const FOOTER_TEXT = '© 2019 Exadel, Inc. | Team4 Internship'
    return <footer className="footer">{FOOTER_TEXT}</footer>
  }
}

export default Footer
