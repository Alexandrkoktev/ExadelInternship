import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.sass'

class AddRouteBTNs extends React.Component {
  render() {
    return (
      <>
        <ButtonToolbar className="center">
          <Link to="/home/new-route" className="sep">
            <Button variant="info" className="sep">
              Add new route as a driver
            </Button>
          </Link>
          <Link to="/home/new-ride" className="sep">
            <Button variant="info" className="sep">
              Add new route as a passenger
            </Button>
          </Link>
        </ButtonToolbar>
      </>
    )
  }
}

export default AddRouteBTNs
