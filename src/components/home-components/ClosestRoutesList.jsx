import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import Route from '../list-components/Route'

class ClosestRoutesList extends React.Component {
  render() {
    const { passengerRides = [], driverRides = [] } = this.props
    const clientRides = passengerRides.map(item => (
      <Route
        routeid={item.id}
        depPoint={item.depPoint}
        destPoint={item.destPoint}
        depTime={item.depTime}
      />
    ))

    const driverrides = driverRides.map(item => (
      <Route
        routeid={item.id}
        depPoint={item.depPoint}
        destPoint={item.destPoint}
        depTime={item.depTime}
      />
    ))

    return (
      <>
        <div style={{ display: 'inline-block', width: '50%' }}>
          <ListGroup>{driverrides}</ListGroup>
        </div>
        <div style={{ display: 'inline-block', width: '50%' }}>
          <ListGroup>{clientRides}</ListGroup>
        </div>
      </>
    )
  }
}

export default ClosestRoutesList
