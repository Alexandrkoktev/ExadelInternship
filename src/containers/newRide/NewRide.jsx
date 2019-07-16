import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col, ListGroup, Button, Form } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import PassengerForm from '../../components/passenger-form/PassengerForm'
// eslint-disable-next-line no-unused-vars
import Map from '../../components/map/Map'
// eslint-disable-next-line no-unused-vars
import RoutesList from '../../components/list-of-routes/RoutesList'
// eslint-disable-next-line no-unused-vars

class NewRoute extends React.Component {
  render() {
    return (
      <Container style={{ marginLeft: '5rem' }}>
        <Row>
          <Col sm={6}>
            <PassengerForm />
            <RoutesList type={'Suitable'} />
          </Col>
          <Col sm={6}>
            <Map />
          </Col>
        </Row>
      </Container>
    )
  }
}
export default NewRoute
