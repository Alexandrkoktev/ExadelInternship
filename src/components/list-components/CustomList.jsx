import React from 'react'
import { ListGroup, Tabs, Tab } from 'react-bootstrap'
import CustomListItem from './CustomListItem'

class CustomList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: props.size,
    }
  }

  createList = (num, text) => {
    let list = []
    for (let i = 0; i < num; i++) {
      list.push(<CustomListItem my_text={text} routeid={i} />)
    }
    return list
  }

  render() {
    return (
      <Tabs>
        <Tab eventKey="passenger" title="Passenger">
          <ListGroup>{this.createList(3, 'Passenger')}</ListGroup>
        </Tab>
        <Tab eventKey="driver" title="Driver">
          <ListGroup>{this.createList(20, 'Driver')}</ListGroup>
        </Tab>
      </Tabs>
    )
  }
}
export default CustomList
