import React from 'react'
import {ButtonGroup} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

class AddRouteBTNs extends React.Component {
  render() {
    return (
      <>
        <ButtonGroup size='lg'>
          <Button>Driver</Button>
          <Button>Passenger</Button>
        </ButtonGroup>
      </>
    )
  }
}

export default AddRouteBTNs
