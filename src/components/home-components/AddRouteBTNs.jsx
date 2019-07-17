import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ButtonGroup, Button } from 'react-bootstrap'

class AddRouteBTNs extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex flex-column">
          <ButtonGroup size="lg">
            <Button
              href="/home/new-route"
              variant="light"
              style={{ width: '50%', height: '80px' }}
            >
              Add new route as a driver
            </Button>
            <Button
              href="/home/new-ride"
              variant="light"
              style={{ width: '50%' }}
            >
              Add new route as a passenger
            </Button>
          </ButtonGroup>
        </div>
      </>
    )
  }
}

export default AddRouteBTNs
