import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import DateSelector from '../date/DateSelector'

class PassengerForm extends React.Component {
  render() {
    return (
      <ListGroup>
        <h3>New route:</h3>
        <Form>
          <Form.Group as={Row}>
            <Form.Control type="text" placeholder="From:" />
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Control type="text" placeholder="To:" />
          </Form.Group>
          <Form.Group as={Row}>
            <DateSelector />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            onClick={event => event.preventDefault()}

          >
            Apply
          </Button>
        </Form>
      </ListGroup>
    )
  }
}
export default PassengerForm
