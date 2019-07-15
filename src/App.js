import React from 'react'
//import './App.scss'
//import './styles.sass'
// eslint-disable-next-line no-unused-vars

import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Content from './components/content/Content'
// eslint-disable-next-line no-unused-vars

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