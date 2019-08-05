import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class Confirm extends React.Component {
  render() {
    const { confirm, deny, show } = this.props
    return (
      <Modal show={show} onHide={deny} centered>
        <Modal.Header>
          <Modal.Title>You sure you want to delete this?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={confirm} variant="info">
            Sure
          </Button>
          <Button onClick={deny} variant="light">
            Nope!
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Confirm
