import React from 'react'

// eslint-disable-next-line no-unused-vars
import ListGroup from 'react-bootstrap/ListGroup'
import Passenger from './Passenger'

class ListOfPassengers extends React.Component {
  render() {
    const { passengers = [], enabled } = this.props
    const passengerArr = passengers.map(item => {
      return (
        <Passenger
          key={item.bookingId}
          name={item.name}
          phoneNumber={item.phoneNumber}
          id={item.bookingId}
          rating={item.rating}
          enabled={enabled}
          userRating={item.userRating}
        />
      )
    })
    return <ListGroup>{passengerArr}</ListGroup>
  }
}

export default ListOfPassengers
