import React from 'react'

// eslint-disable-next-line no-unused-vars
import ListGroup from 'react-bootstrap/ListGroup'

class ListOfPassengers extends React.Component {
  render() {
    const { passengers = [] } = this.props
    const passengerArr = passengers.map(item => {
      return (
        <ListGroup.Item key={item.id}>
          Name: {item.name}, Phone Number: {item.phoneNumber}
        </ListGroup.Item>
      )
    })
    return <ListGroup>{passengerArr}</ListGroup>
  }
}

export default ListOfPassengers
