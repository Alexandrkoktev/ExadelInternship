import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Container } from 'react-bootstrap'
import './styleForApp.sass'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import Footer from './components/footer/Footer'
// eslint-disable-next-line no-unused-vars
import Header from './components/header/Header'
// eslint-disable-next-line no-unused-vars
import Content from './components/content/Content'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Container>
          <Content />
        </Container>
        <Footer />
      </Router>
    )
  }
}
export default App