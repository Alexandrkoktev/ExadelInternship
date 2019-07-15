import React from 'react'
import {ListGroup} from 'react-bootstrap'

function alertClicked() {
  alert('You clicked the ListGroupItem');
}

class ClosestRoutesList extends React.Component {
  render() {
    return (
      <>
        <ListGroup defaultActiveKey="#link2">
          <ListGroup.Item action href="#link1">
            Link 1
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
            Link 2
          </ListGroup.Item>
          <ListGroup.Item action href="#link3">
            Link 3
          </ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>
            This one is a button
          </ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>
            This one is also a button
          </ListGroup.Item>
        </ListGroup>
      </>
    )
  }
}

export default ClosestRoutesList
