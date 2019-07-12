import React from 'react'
import './App.scss'
import './styles.sass'
// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer'
import Header from './components/Header'
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
