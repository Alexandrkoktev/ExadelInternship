import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Col, Form, ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import DateSelector from '../date/DateSelector'

class PassengerForm extends React.Component {
  render() {
    return (
      <ListGroup>
        <h1>New route:</h1>
        <Form>
          <Form.Group>
            <Form.Label>From:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>To:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Time:</Form.Label>
            <DateSelector />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            onClick={() => alert('Applying')}
          >
            Apply
          </Button>
        </Form>
      </ListGroup>
    )
  }
}
export default PassengerForm
