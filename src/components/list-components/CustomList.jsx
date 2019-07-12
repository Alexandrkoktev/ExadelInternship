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
              <CustomListItem />
              <CustomListItem />
            </ListGroup>
          </Tab>
          <Tab eventKey="driver" title="Driver">
            <ListGroup>
              <CustomListItem />
              <CustomListItem />
            </ListGroup>
          </Tab>
        </Tabs>
      </>
    )
  }
}

export default CustomList
