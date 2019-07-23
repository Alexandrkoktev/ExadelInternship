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
import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../commands/new-ride-comm/rides'

// eslint-disable-next-line no-unused-vars
class NewRide extends React.Component {
  componentDidMount() {
    this.props.requestRides()
  }
  render() {
    const { rides } = this.props
    return (
      <Container style={{ marginLeft: '5rem' }}>
        <Row>
          <Col sm={4}>
            <ListGroup>
              <PassengerForm />
              <RoutesList type={'Suitable'} rides={rides} /></ListGroup>
          </Col>
          <Col sm={6}>
            <Maps />
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
