import React from 'react'
import { ListGroup } from 'react-bootstrap'
import CustomListItem from './CustomListItem'

class CustomList extends React.Component {
  render() {
    return (
      <ListGroup>
        <CustomListItem />
        <CustomListItem />
      </ListGroup>
    )
  }
}

export default CustomList
