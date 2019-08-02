import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup } from 'react-bootstrap'
import { formatDate } from '../../util'
import './style.sass'
import FavouriteRoute from '../favourite-routes/FavouriteRoute'
class RoutesList extends React.Component {
  render() {
    const { rides } = this.props
    console.log(rides)
    const dRidesArr = rides.map(item => {
      return (
        this.props.favourites?
          <FavouriteRoute key={item.id} name={item.name} depPoint={item.startPointName} destPoint={item.endPointName}/>
          :
        <ListGroup.Item key={item.id}>
          {item.startPointName} <span className="oi oi-arrow-right" />{' '}
          {item.finishPointName}
          <br /> Time: {formatDate(new Date(item.timeAndDate))}
        </ListGroup.Item>
      )
    })
    return (
      <div className="pscrollable">
        <ListGroup
          title={this.props.type}
          variant="outline-dark"
          className="listStyle"
        >
          {dRidesArr}
        </ListGroup>
      </div>
    )
  }
}

export default RoutesList
