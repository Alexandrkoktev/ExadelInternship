import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup } from 'react-bootstrap'

class RoutesList extends React.Component {
  render() {
    const { rides = [] } = this.props.rides
    const dRidesArr = rides.map(item => {
      return (
        <ListGroup.Item key={Math.random()}>
          From: {item.depPoint} To: {item.destPoint} Time: {item.depTime}
        </ListGroup.Item>
      )
    })
    return (
      <ListGroup>
        <h1>{this.props.type}:</h1>
        {dRidesArr}
      </ListGroup>
    )
  }
}

export default RoutesList
