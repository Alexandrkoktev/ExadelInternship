import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import PassengerForm from '../../components/passenger-form/PassengerForm'
// eslint-disable-next-line no-unused-vars
import Maps from '../../components/map/Maps'
// eslint-disable-next-line no-unused-vars
import RoutesList from '../../components/list-of-routes/RoutesList'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/activeRides'

class NewRide extends React.Component {
  constructor() {
    super()
    this.state = {
      chosenRide: {},
      depPoint: '',
      destPoint: '',
      time: new Date(),
      activeRouteId: '',
      arrayFrom: [],
      arrayTo: [],
    }
  }

  changeDepPoint = depPoint => {
    this.setState({ depPoint: depPoint })
  }
  changeDestPoint = destPoint => {
    this.setState({ destPoint: destPoint })
  }
  onTimeChange = event => {
    this.setState({ time: event })
  }
  changeCoordinates = (from, to) => {
    this.setState({
      arrayFrom: from,
      arrayTo: to
    })
  }

  componentDidMount() {
    this.props.getRides()
    this.mapComponent = React.createRef()
  }

  choose = async id => {
    if (id !== '') {
      await this.props.getRide(id)
      const current = this.props.currentRide
      this.setState({ chosenRide: current })
    }
  }
  handleConfirmClick = event => {
    event.preventDefault()
    const data = {
      meetPoint: this.state.arrayFrom,
      destinationPoint: this.state.arrayTo,
      activeRouteId: this.state.activeRouteId,
    }
    this.props.createBooking(data)
  }
  handleSearchClick = event => {
    event.preventDefault()
    const points = this.mapComponent.current.getPoints()
    let data;
    if (typeof points === 'undefined') {
      this.changeCoordinates(null, null)
      data = {
        meetPoint: null,
        destinationPoint: null,
        datetime: this.state.time,
      }
    } else {
      this.setState({ arrayFrom: points[0], arrayTo: points[1] })
      data = {
        meetPoint: points[0],
        destinationPoint: points[1],
        datetime: this.state.time,
      }
    }
    this.props.getRides(data)
  }
  setRouteId = id => {
    this.setState({ activeRouteId: id })
  }

  render() {
    const { activeRides = [] } = this.props
    return (
      <Container>
        <Row>
          <Col sm={5}>
            <Row>
              <ListGroup>
                <PassengerForm
                  depPoint={this.state.depPoint}
                  destPoint={this.state.destPoint}
                  onTime={this.onTimeChange}
                />
              </ListGroup>
            </Row>
            <Row>
              <Button
                variant="dark"
                type="submit"
                onClick={this.handleSearchClick}
              >
                Search
              </Button>
            </Row>
            <Row>
              <RoutesList
                rides={activeRides}
                getRide={this.choose.bind(this)}
                setId={this.setRouteId}
              />
            </Row>
          </Col>
          <Col sm={7}>
            <Maps
              ref={this.mapComponent}
              needPlacemarks={true}
              showing={this.state.chosenRide}
              changeDepPoint={this.changeDepPoint}
              changeDestPoint={this.changeDestPoint}
              clearMap={this.props.getRides}
            />
            <Row>
              <Button
                variant="dark"
                type="submit"
                onClick={this.handleConfirmClick}
                style={{ marginLeft: '450px', marginTop: '100px' }}
              >
                Confirm
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
)(NewRide)
