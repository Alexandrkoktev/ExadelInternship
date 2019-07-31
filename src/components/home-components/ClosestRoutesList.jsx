import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup, Col, Row, Button, ButtonToolbar } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import Route from '../list-components/Route'
// eslint-disable-next-line no-unused-vars
import Spinner from '../spinner/spinner'
import { Link } from 'react-router-dom'
import './style.sass'

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
        <Row>

          <Col><ButtonToolbar className="center">
            <Link to="/home/new-route" className="sep">
              <Button variant="info" className="sep">
                Add new route as a driver
            </Button>
            </Link> </ButtonToolbar>
            <ListGroup>{driverrides}</ListGroup>
          </Col>
          <Col ><ButtonToolbar className="center">
            <Link to="/home/new-ride" className="sep">
              <Button variant="info" className="sep">
                Add new route as a passenger
            </Button>
            </Link>
          </ButtonToolbar>
            <ListGroup>{clientRides}</ListGroup>
          </Col>

        </Row>
      )
  }
}

export default ClosestRoutesList
