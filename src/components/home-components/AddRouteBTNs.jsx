import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap'

class AddRouteBTNs extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex flex-column">
          <ButtonToolbar className="justify-content">
          <ButtonGroup size="m" style={{ width: "40%", margin: "10px auto", align: "center" }}>
            <Button
              href="/home/new-route"
              variant="info"
              style={{ width: '20%', padding: '10px' }}
            >
              Add new route as a driver
            </Button>
            </ButtonGroup>
          <ButtonGroup size="m" style={{ width: "40%", margin: "10px auto", align: "center" }}>
            <Button
              href="/home/new-ride"
              variant="info"
              style={{ width: '20%', padding: '10px' }}
            >
              Add new route as a passenger
            </Button>
          </ButtonGroup>
          </ButtonToolbar>
        </div>
      </>
    )
  }
}

export default AddRouteBTNs
