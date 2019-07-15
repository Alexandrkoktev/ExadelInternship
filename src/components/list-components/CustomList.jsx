import React from 'react'
import { ListGroup, Tabs, Tab } from 'react-bootstrap'
import CustomListItem from './CustomListItem'

class CustomList extends React.Component {
  render() {
    return (
      <Tabs>
        <Tab eventKey="passenger" title="Passenger">
          <ListGroup>
            <CustomListItem my_text="Passenger" routeid="1" />
            <CustomListItem my_text="Passenger" routeid="2" />
          </ListGroup>
        </Tab>
        <Tab eventKey="driver" title="Driver">
          <ListGroup>
            <CustomListItem my_text="Driver" routeid="3" />
            <CustomListItem my_text="Driver" routeid="4" />
          </ListGroup>
        </Tab>
      </Tabs>
    )
  }
}
export default CustomList
