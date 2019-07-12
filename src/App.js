import React from 'react'

<<<<<<< HEAD
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Content from './components/Content'
import { BrowserRouter as Router } from 'react-router-dom'
=======
import Footer from './components/Footer'
// import logo from './logo.svg'
import './App.scss'
import './styles.sass'
import { Button, Card, Form, Navbar } from 'react-bootstrap'
>>>>>>> 07b6f3bf27f3a82487c9eae70b5379a1a0658ca1

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
