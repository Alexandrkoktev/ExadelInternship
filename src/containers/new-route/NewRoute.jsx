import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import RoutesList from '../../components/list-of-routes/RoutesList'
// eslint-disable-next-line no-unused-vars
import NewRouteInfo from '../../components/new-route-info/NewRouteInfo'
// eslint-disable-next-line no-unused-vars
import Maps from '../../components/map/Maps'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/rides'

class NewRoute extends React.Component {
  constructor() {
    super()
    this.state = {
      from: '',
      to: '',
      carId: '',
      seats: '',
      time: new Date(),
      changed: false,
      car:'',
      chosenFavourite: {},
      chosenFavouriteId: '',
    }
  }

  componentDidMount() {
    this.props.requestRides()
    this.props.requestCars()
    this.mapComponent = React.createRef()
  }

  onCarChange = (carId,carInfo) => {
    this.setState({ carId: carId,car:carInfo,})
  }
  onSeatsChange = event => {
    const seats = event.target.value
    this.setState({ seats: seats })
  }
  onTimeChange = event => {
    this.setState({ time: event })
  }
  handleClick = event => {
    event.preventDefault()
    const route = this.mapComponent.current.getRouteInfo()
    const carId = (this.props.cars[0] || {}).id
    const information = { ...this.state, carId }
    this.props.createRoute(route, information)
  }
  handleChange = data => {

    this.setState({
      from: data[0],
      to: data[1],
      changed: !this.state.changed,
    })
  }

  choose = async id => {
    if (id !== '') {
      await this.props.getFavouriteRoute(id)
      const current = this.props.favouriteRoute
      this.setState({ chosenFavourite: current })
    }
  }

  setRouteId = id => {
    this.setState({ activeRouteId: id })
  }

  render() {
    const { rides = [] } = this.props
    const { cars = [] } = this.props
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <Row>
              <ListGroup>
                <NewRouteInfo
                  from={this.state.from}
                  to={this.state.to}
                  key={this.state.changed}
                  seats={this.state.seats}
                  time={this.state.time}
                  car={this.state.car}
                  cars={cars}
                  onSeats={this.onSeatsChange}
                  onTime={this.onTimeChange}
                  onCar={this.onCarChange}
                />
                <RoutesList
                  rides={rides}
                  getRide={this.choose.bind(this)}
                  setId={this.setRouteId}
                  favourites={true}
                />
              </ListGroup>
            </Row>
          </Col>
          <Col sm={8} style={{ height: '450px' }}>
            <Maps
              ref={this.mapComponent}
              needRouteEditor={true}
              chosenFavourite={this.state.chosenFavourite}
              handleChange={this.handleChange}
            />
            <Row>
              <Button
                className="right"
                variant="dark"
                type="submit"
                onClick={event => {
                  this.handleClick(event)
                }}
                style={{ marginLeft: '85%', marginTop: '20px' }}
              >
                Create route
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewRoute)
