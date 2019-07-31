import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Form, Container, Col, Row } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import DateSelector from '../date/DateSelector'
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/cars'

class NewRouteInfo extends React.Component {
  componentDidMount() {
    this.props.requestCars()
  }

  render() {
    const { cars = [] } = this.props
    const carsArr = cars.map(item => {
      return (
        <option key={item.id}>
          {item.brand} {item.model}, {item.plate}
        </option>
      )
    })
    return (
      <Container>
        <h3>New route:</h3>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Type:
            </Form.Label>
            <Col sm="5">
              <Form.Control as={'select'}>
                <option>Regular </option>
                <option>Disposable</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              From:
            </Form.Label>
            <Col>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              To:
            </Form.Label>
            <Col>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Time:
            </Form.Label>
            <Col>
              <DateSelector />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formGridState">
            <Form.Label column sm="2">
              Car
            </Form.Label>
            <Col>
              <Form.Control as="select">{carsArr}</Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Seats:
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRouteInfo)
