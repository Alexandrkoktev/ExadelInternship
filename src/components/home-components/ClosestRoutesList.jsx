import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Route from '../list-components/Route'

class ClosestRoutesList extends React.Component {
  render() {
    return (
      <>
        <div style={{ display: 'inline-block', width: '50%' }}>
          <ListGroup>
            <Route my_text="Driver" routeid="1" />
            <Route my_text="Driver" routeid="2" />
            <Route my_text="Driver" routeid="3" />
          </ListGroup>
        </div>
        <div style={{ display: 'inline-block', width: '50%' }}>
          <ListGroup>
            <Route my_text="Passenger" routeid="4" />
            <Route my_text="Passenger" routeid="5" />
            <Route my_text="Passenger" routeid="6" />
          </ListGroup>
        </div>
      </>
    )
  }
}

export default ClosestRoutesList
