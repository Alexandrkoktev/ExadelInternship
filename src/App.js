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
