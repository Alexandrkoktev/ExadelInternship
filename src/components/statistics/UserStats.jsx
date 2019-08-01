import React from 'react'

class UserStats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      ratingDriver: props.ratingDriver,
      ratingPassenger: props.ratingPassenger,
      distance: props.distance,
      amountOfPassengers: props.amountOfPassengers,
      amountOfBookings: props.amountOfBookings,
      amountOfRoutes: props.amountOfRoutes,
    }
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>{this.state.name}</td>
          <td>{this.state.ratingDriver.toFixed(1)}</td>
          <td>{this.state.ratingPassenger}</td>
          <td>{this.state.distance.toFixed(2)}</td>
          <td>{this.state.amountOfPassengers}</td>
          <td>{this.state.amountOfBookings}</td>
          <td>{this.state.amountOfRoutes}</td>
        </tr>
      </tbody>
    )
  }
}

export default UserStats
