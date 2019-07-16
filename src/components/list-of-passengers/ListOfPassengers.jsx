import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'

class ListOfPassengers extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item link = "#">One</ListGroup.Item>
        <ListGroup.Item link = "#">Two</ListGroup.Item>
        <ListGroup.Item link = '#'>Three</ListGroup.Item>
        <ListGroup.Item link = "#">Four</ListGroup.Item>
        <ListGroup.Item link = '#'>Five</ListGroup.Item>
        <ListGroup.Item link = '#'>Six</ListGroup.Item>
      </ListGroup>
    )
  }
}

export default ListOfPassengers
