import React from 'react'
import UserStats from './UserStats'

class ListOfUsersStatistics extends React.Component {
  render() {
    const { statistics } = this.props

    const statisticsArray = statistics.map(item => {
      return (
        <>
          <UserStats
            name={item.name}
            ratingDriver={item.ratingDriver}
            ratingPassenger={item.ratingPassenger}
            distance={item.distance}
            amountOfPassengers={item.amountOfPassengers}
            amountOfBookings={item.amountOfBookings}
            amountOfRoutes={item.amountOfRoutes}
          />
        </>
      )
    })
    return <>{statisticsArray}</>
  }
}

export default ListOfUsersStatistics
