import React from 'react'
// eslint-disable-next-line no-unused-vars
import AddRouteBTNs from '../../components/home-components/AddRouteBTNs'
// eslint-disable-next-line no-unused-vars
import ClosestRoutesList from '../../components/home-components/ClosestRoutesList'

class Home extends React.Component {
  componentDidMount() {
    // from maptoDToP
    // this.reaquestRides()
  }

  render() {
    return (
      <>
        <AddRouteBTNs />
        <ClosestRoutesList />
      </>
    )
  }
}
// maptoSToP, maptoDToP
export default Home
