import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup } from 'react-bootstrap'

class RoutesList extends React.Component {
  render() {
    return (
      <ListGroup>
        <h1>{this.props.type}:</h1>
        <ListGroup.Item action onClick={() => alert('clicked')}>
          1st route
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => alert('clicked')}>
          2nd route
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => alert('clicked')}>
          3rd route
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => alert('clicked')}>
          4th route
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => alert('clicked')}>
          5th route
        </ListGroup.Item>
      </ListGroup>
    )
  }
}
export default RoutesList
