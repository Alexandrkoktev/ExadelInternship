import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class AddRouteBTNs extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex flex-column">
          <ButtonGroup size="lg">
            <Button>New Driver route</Button>
            <Button>New Passenger route</Button>
          </ButtonGroup>
        </div>
      </>
    )
  }
}

export default AddRouteBTNs
