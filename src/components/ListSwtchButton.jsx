import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

class ListSwitchButton extends React.Component {
  render() {
    return (
      <ButtonGroup size="lg" className="mt-3">
        <Button variant="light">Driver</Button>
        <Button variant="light">Passenger</Button>
      </ButtonGroup>
    )
  }
}

export default ListSwitchButton
