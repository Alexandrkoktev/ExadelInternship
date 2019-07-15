import React from 'react'
import AddRouteBTNs from '../components/home-components/AddRouteBTNs'
import ClosestRoutesList from '../components/home-components/ClosestRoutesList'

class Home extends React.Component {
  render() {
    return (
      <>
        <AddRouteBTNs />
        <ClosestRoutesList />
      </>
    )
  }
}

export default Home
