import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'

class PreviousRoute extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 1,
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue, editing: false })
  }

  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={9}>
            {this.props.depPoint} <span className="oi oi-arrow-right" />{' '}
            {this.props.destPoint}
          </Col>
          <Col>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
              editing={this.state.editing}
            />
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default PreviousRoute
