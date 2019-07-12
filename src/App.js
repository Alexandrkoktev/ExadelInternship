import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
// import logo from './logo.svg'
import './App.scss'
import './styles.sass'

// eslint-disable-next-line no-unused-vars
// import Greetings from './Greetings'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    )
  }
}

export default App
