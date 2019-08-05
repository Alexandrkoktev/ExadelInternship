import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import DateSelector from '../date/DateSelector'

class PassengerForm extends React.Component {
  render() {
    return (
      <>
        <Row>
          <h3 className="styleForHead">New route:</h3>
        </Row>
        <Row>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                From:
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  value={this.props.depPoint}
                  readOnly
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                To:
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  value={this.props.destPoint}
                  readOnly
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Time:
              </Form.Label>
              <Col>
                <DateSelector onChange={this.props.onTime} />
              </Col>
            </Form.Group>
          </Form>
        </Row>
      </>
    )
  }
}

export default PassengerForm
