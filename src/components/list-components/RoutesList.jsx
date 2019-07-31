import React from 'react'
import { ListGroup, Tab, Nav, ListGroupItem } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import '../../containers/profile/profile.sass'
import { connect } from 'react-redux'
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../commands/rides'

class RoutesList extends React.Component {

  componentDidMount() {
    this.props.getActiveRoutes()
    this.props.getActiveBookings()
    this.props.getRoutesHistory()
    this.props.getBookingsHistory()
  }

  active = item => {
    return (
      <ListGroupItem key={item.id}>
        {item.startPointName} <span className="oi oi-arrow-right" />{' '}
        {item.finishPointName}
        <br />
        <span className="oi oi-clock" />
        {new Date(item.timeAndDate).toLocaleDateString()},
        {new Date(item.timeAndDate).toLocaleTimeString()}
      </ListGroupItem>
    )
  }

  history = item => {
    return (
      <ListGroup.Item key={item.id} className='history'>
        {item.startPointName} <span className="oi oi-arrow-right" />{' '}
        {item.finishPointName}
        <br />
        <span className="oi oi-clock" />
        {new Date(item.timeAndDate).toLocaleDateString()},
        {new Date(item.timeAndDate).toLocaleTimeString()}
      </ListGroup.Item>)
  }

  render() {
    const { activeRoutes = [], activeBookings = [], routesHistory = [], bookingHistory } = this.props
    const { isLoading } = this.props
    const listOfDriverRides = activeRoutes.map(this.active).concat(routesHistory.map(this.history))
    const listOfPassengerRides = activeBookings.map(this.active).concat(bookingHistory.map(this.history))
    return isLoading ? (
      <Spinner />
    ) : (
        <Tab.Container defaultActiveKey="passenger">
          <Nav justify variant="tabs">
            <Nav.Item className="tabs">
              <Nav.Link eventKey="passenger" className="text">Passenger</Nav.Link>
            </Nav.Item>
            <Nav.Item className="tabs">
              <Nav.Link eventKey="driver" className="text">Driver</Nav.Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(RoutesList)
