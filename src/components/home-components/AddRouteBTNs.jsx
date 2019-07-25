import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class AddRouteBTNs extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex flex-column">
          <ButtonToolbar className="justify-content">
            <div style={{ width: '50%', marginTop: '1%', marginBottom: '1%' }}>
              <ButtonGroup size="m">
                <Link to="/home/new-route">
                  <div style={{ width: '100%', marginLeft: '80%' }}>
                    <Button variant="info">Add new route as a driver</Button>
                  </div>
                </Link>
              </ButtonGroup>
            </div>
            <div style={{ width: '50%', marginTop: '1%', marginBottom: '1%' }}>
              <ButtonGroup size="m">
                <Link to="/home/new-ride">
                  <div style={{ width: '100%', marginLeft: '80%' }}>
                    <Button variant="info">Add new route as a passenger</Button>
                  </div>
                </Link>
              </ButtonGroup>
            </div>
          </ButtonToolbar>
        </div>
      </>
    )
  }
}

export default AddRouteBTNs
