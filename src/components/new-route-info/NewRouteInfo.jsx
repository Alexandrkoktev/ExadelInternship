import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Form, ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import DateSelector from '../date/DateSelector'

class NewRouteInfo extends React.Component {
  render() {
    return (
      <ListGroup>
        <h1>New route:</h1>
        <Form>
          <Form.Group>
            <Form.Label>Type:</Form.Label>
            <Form.Control as={'select'}>
              <option>Regular </option>
              <option>Disposable</option>
            </Form.Control>
          </Form.Group>
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
            <DateSelector/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Seats:</Form.Label>
            <Form.Control as={'select'}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="dark" type="submit" onClick={() => alert('Created')}>
            Create route
          </Button>
        </Form>
      </ListGroup>
    )
  }
}
export default NewRouteInfo
