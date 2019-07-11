import React from 'react'

import './App.css'
import './styles.sass'
// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer'

// eslint-disable-next-line no-unused-vars
import Header from './components/Header'
// eslint-disable-next-line no-unused-vars
import AuthForm from './components/AuthForm'
// eslint-disable-next-line no-unused-vars
import { Button, Card, Form, Navbar, Nav, Image } from 'react-bootstrap'


import Footer from './components/Footer'
// import logo from './logo.svg'
import './App.scss'
import './styles.sass'
import { Button, Card, Form, Navbar } from 'react-bootstrap'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AuthForm />
        <Footer />
      </div>
    )
  }
}

export default App
