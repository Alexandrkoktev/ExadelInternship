import React from 'react'
import './App.scss'
import './styles.sass'
// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer'
import Header from './components/header/Header'
import AuthForm from './components/AuthForm'
// eslint-disable-next-line no-unused-vars

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
