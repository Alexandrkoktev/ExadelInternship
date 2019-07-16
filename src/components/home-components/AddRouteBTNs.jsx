import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

class AddRouteBTNs extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex flex-column">
          <ButtonGroup size="lg">
            <Button variant="light" style={{width: "50%", height: "80px"}}>Add new route as a driver</Button>
            <Button variant="light" style={{width: "50%"}}>Add new route as a passenger</Button>
          </ButtonGroup>
        </div>
      </>
    )
  }
}

export default AddRouteBTNs
