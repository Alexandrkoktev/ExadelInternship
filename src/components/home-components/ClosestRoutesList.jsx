import React from 'react'
import {ListGroup} from 'react-bootstrap'
import CustomListItem from '../list-components/CustomListItem'

class ClosestRoutesList extends React.Component {
  render() {
    return (
      <>
        <div style={{display: "inline-block", width:"50%"}}>
          <ListGroup>
            <CustomListItem my_text="Driver" routeid="1" />
            <CustomListItem my_text="Driver" routeid="2" />
            <CustomListItem my_text="Driver" routeid="3" />
          </ListGroup>
        </div>
        <div style={{display: "inline-block", width:"50%"}}>
          <ListGroup>
            <CustomListItem my_text="Passenger" routeid="4" />
            <CustomListItem my_text="Passenger" routeid="5" />
            <CustomListItem my_text="Passenger" routeid="6" />
          </ListGroup>
        </div>
      </>
    )
  }
}

export default ClosestRoutesList
