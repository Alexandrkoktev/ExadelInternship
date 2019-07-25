import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import Route from '../list-components/Route'
// eslint-disable-next-line no-unused-vars
import Spinner from '../spinner/spinner'

class ClosestRoutesList extends React.Component {
  render() {
    const { passengerRides = [], driverRides = [] } = this.props
    const { isLoading } = this.props
    const clientRides = passengerRides.map(item => (
      <Route
        routeid={item.id}
        key={item.id}
        depPoint={item.startPointName}
        destPoint={item.finishPointName}
        depDate={new Date(item.timeAndDate).toDateString()}
        depTime={new Date(item.timeAndDate).toLocaleTimeString()}
      />
    ))

    const driverrides = driverRides.map(item => (
      <Route
        routeid={item.id}
        key={item.id}
        depPoint={item.startPointName}
        destPoint={item.finishPointName}
        depDate={new Date(item.timeAndDate).toDateString()}
        depTime={new Date(item.timeAndDate).toLocaleTimeString()}
      />
    ))

    return isLoading ? (
      <Spinner />
    ) : (
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
