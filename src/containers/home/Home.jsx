import React from 'react'
// eslint-disable-next-line no-unused-vars
import AddRouteBTNs from '../../components/home-components/AddRouteBTNs'
// eslint-disable-next-line no-unused-vars
import ClosestRoutesList from '../../components/home-components/ClosestRoutesList'

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
