// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from './logo.svg'
import './App.css'
// eslint-disable-next-line no-unused-vars
import Greetings from './Greetings'

function App() {
  const name = '11111'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings name={name} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
