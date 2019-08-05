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
import { store } from '../../store/store'
import { push } from 'connected-react-router'

class NewRoute extends React.Component {
  constructor() {
    super()
    this.state = {
      from: '',
      to: '',
      carId: '',
      seats: '',
      time: '',
      changed: false,
    }
  }

  componentDidMount() {
    this.props.requestRides()
    this.mapComponent = React.createRef()
  }

  onCarChange = carId => {
    this.setState({ carId: carId })
  }
  onSeatsChange = event => {
    const seats = event.target.value
    this.setState({ seats: seats })
  }
  onTimeChange = event => {
    const time = event
    this.setState({ time: time })
  }
  handleClick = event => {
    event.preventDefault()
    const route = this.mapComponent.current.getRouteInfo()
    const information = this.state
    this.props.createRoute(route, information)
    //   store.dispatch(push('/home'))
  }
  handleChange = data => {
    this.setState({
      from: data[0],
      to: data[1],
      changed: !this.state.changed,
    })
  }

  render() {
    const { rides } = this.props
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <ListGroup>
              <NewRouteInfo
                from={this.state.from}
                to={this.state.to}
                key={this.state.changed}
                onSeats={this.onSeatsChange}
                onTime={this.onTimeChange}
                onCar={this.onCarChange}
              />
              <RoutesList rides={rides} favourites={true} />
            </ListGroup>
            <Button
              className="right"
              variant="dark"
              type="submit"
              onClick={event => {
                this.handleClick(event)
              }}
            >
              Create route
            </Button>
          </Col>
          <Col sm={6} style={{ height: '450px' }}>
            <Maps
              needRouteEditor={true}
              ref={this.mapComponent}
              handleChange={this.handleChange}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRoute)
