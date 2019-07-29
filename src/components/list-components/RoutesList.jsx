import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup, Tab, Nav, ListGroupItem } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import Route from './Route'
// eslint-disable-next-line no-unused-vars
import Spinner from 'react-bootstrap/Spinner'

class RoutesList extends React.Component {
  render() {
    const { driverRides = [] } = this.props
    const { passengerRides = [] } = this.props
    const { isLoading } = this.props
    const listOfDriverRides = driverRides.map(item => {
      return (
        <ListGroupItem key={item.id}>
          {item.startPointName} <span className="oi oi-arrow-right" />{' '}
          {item.finishPointName}
          <br />
          <span className="oi oi-clock" />{' '}
          {new Date(item.timeAndDate).toLocaleDateString()},{' '}
          {new Date(item.timeAndDate).toLocaleTimeString()}
        </ListGroupItem>
      )
    })
    const listOfPassengerRides = passengerRides.map(item => {
      return (
        <ListGroupItem key={item.id}>
          {item.startPointName} <span className="oi oi-arrow-right" />{' '}
          {item.finishPointName}
          <br />
          <span className="oi oi-clock" />{' '}
          {new Date(item.timeAndDate).toLocaleDateString()},{' '}
          {new Date(item.timeAndDate).toLocaleTimeString()}
        </ListGroupItem>
      )
    })
    return isLoading ? (
      <Spinner />
    ) : (
      <Tab.Container defaultActiveKey="driver">
        <Nav justify variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="passenger">Passenger</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="driver">Driver</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="scrollable">
          <Tab.Content>
            <Tab.Pane eventKey="passenger">
              <ListGroup>{listOfPassengerRides}</ListGroup>
            </Tab.Pane>
            <Tab.Pane eventKey="driver">
              <ListGroup>{listOfDriverRides}</ListGroup>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    )
  }
}

export default RoutesList
