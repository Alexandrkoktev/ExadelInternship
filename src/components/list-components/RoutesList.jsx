import React from 'react'
import { ListGroup, Tab, Nav } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import Route from './Route'
import '../../containers/profile/profile.sass'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/rides'

class RoutesList extends React.Component {
  componentDidMount() {
    this.props.getActiveRoutes()
    this.props.getActiveBookings()
    this.props.getRoutesHistory()
    this.props.getBookingsHistory()
  }

  refresh = () => {
    this.props.getActiveRoutes()
    this.props.getActiveBookings()
  }

  active = (item, passenger, del) => {
    return (
      <Route
        depPoint={item.startPointName}
        destPoint={item.finishPointName}
        depTime={item.timeAndDate}
        badge=" Upcoming"
        id={item.id}
        key={item.id}
        passenger={passenger}
        del={del}
        onDel={this.refresh.bind(this)}
      />
    )
  }

  history = (item, passenger) => {
    return (
      <Route
        depPoint={item.startPointName}
        destPoint={item.finishPointName}
        depTime={item.timeAndDate}
        badge="Finished"
        styling="history"
        id={item.id}
        key={item.id}
        passenger={passenger}
      />
    )
  }

  render() {
    const {
      activeRoutes = [],
      activeBookings = [],
      routesHistory = [],
      bookingHistory,
    } = this.props
    const { isLoading, deleteBooking, deleteRoute } = this.props
    const listOfDriverRides = activeRoutes
      .map(x => this.active(x, true, deleteRoute))
      .concat(routesHistory.map(y => this.history(y, true)))
    const listOfPassengerRides = activeBookings
      .map(x => this.active(x, false, deleteBooking))
      .concat(bookingHistory.map(y => this.history(y, false)))
    return isLoading ? (
      <Spinner />
    ) : (
      <Tab.Container defaultActiveKey="passenger">
        <Nav justify variant="tabs">
          <Nav.Item className="tabs">
            <Nav.Link eventKey="passenger" className="text">
              Passenger
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tabs">
            <Nav.Link eventKey="driver" className="text">
              Driver
            </Nav.Link>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutesList)
