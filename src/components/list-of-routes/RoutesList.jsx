import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup } from 'react-bootstrap'
import { formatDate } from '../../util'
import './style.sass'
// eslint-disable-next-line no-unused-vars
import FavouriteRoute from '../favourite-routes/FavouriteRoute'
// eslint-disable-next-line no-unused-vars
import InfiniteScroll from 'react-infinite-scroll-component'

class RoutesList extends React.Component {
  render() {
    const { getRide } = this.props
    const { rides } = this.props
    const { setId } = this.props
    const dRidesArr = rides.map(item => {
      return this.props.favourites ? (
        <FavouriteRoute
          key={item.routeId}
          id={item.routeId}
          routeId={item.id}
          name={item.name}
          depPoint={item.startPointName}
          destPoint={item.endPointName}
          getRide={getRide}
          setId={setId}
          inRoutes={true}
        />
      ) : (
        <ListGroup.Item
          action
          key={item.id}
          className="itemOfActiveRidesList"
          onClick={() => {
            getRide(item.id)
            this.props.setId(item.id)
          }}
        >
          {item.startPointName} <span className="oi oi-arrow-right" />{' '}
          {item.finishPointName}
          <br /> Time: {formatDate(new Date(item.timeAndDate))}
        </ListGroup.Item>
      )
    })
    return (
      <InfiniteScroll dataLength={rides.length} height={300}>
        <ListGroup
          title={this.props.type}
          variant="outline-dark"
          className="listStyle"
        >
          {dRidesArr}
        </ListGroup>
      </InfiniteScroll>
    )
  }
}

export default RoutesList
