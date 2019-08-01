import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ListGroup } from 'react-bootstrap'
import { formatDate } from '../../util'
class RoutesList extends React.Component {
  render() {
    const { rides } = this.props
    const dRidesArr = rides.map(item => {
      return (
        <ListGroup.Item key={item.id}>
          {item.startPointName} <span className="oi oi-arrow-right" />{' '}
          {item.finishPointName}
          <br /> Time: {formatDate(new Date(item.timeAndDate))}
        </ListGroup.Item>
      )
    })
    return (
      <ListGroup
        title={this.props.type}
        variant="outline-dark"
        className="pscrollable"
        style={{ marginTop: '2%', marginBottom: '', marginRight: '' }}
      >
        {dRidesArr}
      </ListGroup>
    )
  }
}

export default RoutesList
