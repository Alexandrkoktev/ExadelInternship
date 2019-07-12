// eslint-disable-next-line no-unused-vars
import React from 'react'

import Body from './components/Body'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

import './App.scss'
import './styles.sass'

// eslint-disable-next-line no-unused-vars
// import Greetings from './Greetings'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    )
  }
}

export default App
