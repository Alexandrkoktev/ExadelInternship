import React from 'react'
import './App.scss'
import './styles.sass'
// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer'
// eslint-disable-next-line no-unused-vars
import Header from './components/Header'
// eslint-disable-next-line no-unused-vars
import DriverRouteAdding from './containers/DriverRouteAdding'
// eslint-disable-next-line no-unused-vars
class App extends React.Component {
  render() {
    return (
      <div>

        <DriverRouteAdding/>
        <Footer />
      </div>
    )
  }
}
export default App
