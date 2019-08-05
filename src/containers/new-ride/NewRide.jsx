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
    }
  }
  changeDepPoint = depPoint => {
    this.setState({ depPoint: depPoint })
  }
  changeDestPoint = destPoint => {
    this.setState({ destPoint: destPoint })
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

  handleSearchClick = event => {
    event.preventDefault()
    const points = this.mapComponent.current.getPoints()
    console.log(points)
  }

  handleConfirmClick = event => {
    event.preventDefault()
    console.log('confirmed');
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
              />
            </Row>
            <Row>
              <Button
                variant="dark"
                type="submit"
                onClick={event => event.preventDefault()}
                style={{ marginTop: '10px' }}
              >
                Confirm
              </Button>
            </Row>
          </Col>
          <Col sm={7}>
            <Maps
              ref={this.mapComponent}
              needPlacemarks={true}
              showing={this.state.chosenRide}
              changeDepPoint={this.changeDepPoint}
              changeDestPoint={this.changeDestPoint}
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
)(NewRide)
