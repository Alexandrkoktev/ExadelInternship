import React from 'react'
import '../App.scss'
import '../styles.sass'
// eslint-disable-next-line no-unused-vars
import Footer from '../components/Footer'
// eslint-disable-next-line no-unused-vars
import Header from '../components/Header'
// eslint-disable-next-line no-unused-vars
import AuthForm from '../components/AuthForm'
// eslint-disable-next-line no-unused-vars
class AuthPage extends React.Component {
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
export default AuthPage
