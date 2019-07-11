import React from 'react'
import { ListGroup } from 'react-bootstrap'
import CustomListItem from './CustomListItem'

class CustomList extends React.Component {
  render() {
    return (
      <ListGroup>
        <CustomListItem text="Minsk - Ratomka" />
        <CustomListItem text="Minsk - Khmelevka" />
      </ListGroup>
    )
  }
}

export default CustomList
