import React from 'react'

import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Content from './components/Content'
import { BrowserRouter as Router } from 'react-router-dom'

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
