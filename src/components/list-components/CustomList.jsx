import React from 'react'
import { ListGroup, Tab, Nav } from 'react-bootstrap'
import CustomListItem from './CustomListItem'
import './style.sass'

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
      <Tab.Container defaultActiveKey="driver">
        <Nav justify variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="passenger">Passenger</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="driver">Driver</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="scrollable">
          <Tab.Content>
            <Tab.Pane eventKey="passenger">
              <ListGroup>
                {this.createList(this.state.size, 'Passenger')}
              </ListGroup>
            </Tab.Pane>
            <Tab.Pane eventKey="driver">
              <ListGroup>
                {this.createList(this.state.size, 'Driver')}
              </ListGroup>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    )
  }
}
export default CustomList
