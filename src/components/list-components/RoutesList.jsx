import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup, Tab, Nav,  ListGroupItem } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import Route from './Route'
import './style.sass'

class RoutesList extends React.Component {

  createList = (num, text) => {
    let list = []
    for (let i = 0; i < num; i++) {
      list.push(<Route my_text={text} key={i} />)
    }
    return list
  }

  render() {
    const {driverRides=[]}=this.props
    const {passengerRides=[]}=this.props
    const listOfDriverRides=driverRides.map(item=>{
      return (
        <ListGroupItem key={item.id}>
          {item.startPointName} -> {item.finishPointName} Time: {new Date(item.timeAndDate).toLocaleDateString()},{new Date(item.timeAndDate).toLocaleTimeString()}
        </ListGroupItem>
      )
    })
    const listOfPassengerRides=passengerRides.map(item=>{
      return (
        <ListGroupItem key={item.id}>
          {item.startPointName} -> {item.finishPointName} Time: {new Date(item.timeAndDate).toLocaleDateString()},{new Date(item.timeAndDate).toLocaleTimeString()}
        </ListGroupItem>
      )
    })
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
        <div className="scrollable" >
          <Tab.Content>
            <Tab.Pane eventKey="passenger">
              <ListGroup>
                {listOfPassengerRides}
              </ListGroup>
            </Tab.Pane>
            <Tab.Pane eventKey="driver">
              <ListGroup>
                {listOfDriverRides}
              </ListGroup>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    )
  }
}
export default RoutesList
