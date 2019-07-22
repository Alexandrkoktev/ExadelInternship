import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'

class PreviousRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.my_text,
      rating: 1,
      editing: true,
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue, editing: false })
  }

  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={9}>{this.state.text}</Col>
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
