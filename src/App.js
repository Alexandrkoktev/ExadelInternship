import React from 'react'
import './App.scss'
import './styles.sass'
// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer'
import Header from './components/Header'
import AuthPage from './containers/AuthPage'
// eslint-disable-next-line no-unused-vars
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AuthPage/>
        <Footer />
      </div>
    )
  }
}
export default App
