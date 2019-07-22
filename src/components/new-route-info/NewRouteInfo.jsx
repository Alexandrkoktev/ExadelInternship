import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Form, ListGroup, Col, Row } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import DateSelector from '../date/DateSelector'
// eslint-disable-next-line no-unused-vars
import RoutesList from '../list-of-routes/RoutesList'

class NewRouteInfo extends React.Component {
  render() {
    return (
      <ListGroup>
        <h3>New route:</h3>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Type:
            </Form.Label>
            <Col>
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
            <Form.Label column sm="2">Time:</Form.Label>
            <Col><DateSelector /></Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Seats:
            </Form.Label>
            <Col sm="4">
              <Form.Control type="text" />
            </Col>
            <Col>
              <Button
                className="right"
                variant="dark"
                type="submit"
                onClick={() => alert('Created')}
              >
                Create route
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </ListGroup >
    )
  }
}
export default NewRouteInfo
