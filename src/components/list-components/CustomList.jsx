import React from 'react'
import { ListGroup, Tabs, Tab } from 'react-bootstrap'
import CustomListItem from './CustomListItem'

class CustomList extends React.Component {
  render() {
    return (
      <>
        <Tabs>
          <Tab eventKey="passenger" title="Passenger">
            <ListGroup>
              <CustomListItem my_text="Passenger" />
              <CustomListItem my_text="Passenger" />
            </ListGroup>
          </Tab>
          <Tab eventKey="driver" title="Driver">
            <ListGroup>
              <CustomListItem my_text="Driver" />
              <CustomListItem my_text="Driver" />
            </ListGroup>
          </Tab>
        </Tabs>
      </>
    )
  }
}

export default CustomList
