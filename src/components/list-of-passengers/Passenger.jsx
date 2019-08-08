import React from 'react'
import { ListGroup, Col, Row } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/passengers'

class Passenger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: props.rating || 0,
    }
  }

  changeRating = newRating => {
    this.setState({ rating: newRating })
    this.props.ratePassenger(this.props.id, newRating)
  }

  render() {
    const {
      name,
      phoneNumber,
      passengers: { enabled },
      userRating,
    } = this.props
    return (
      <ListGroup.Item>
        <Row>
          <Col>
            <b>Name:</b> {name}
            <br />
            <b>Phone number:</b> {phoneNumber}
          </Col>
          {enabled ? (
            <Col>
              <StarRatings
                rating={userRating}
                starRatedColor="#888888"
                numberOfStars={5}
                name="userRating"
                starDimension="17px"
                starSpacing="2px"
              />
            </Col>
          ) : (
            <Col>
              <StarRatings
                rating={this.state.rating}
                starRatedColor="#179EB7"
                starHoverColor={'rgb(230, 67, 47)'}
                changeRating={
                  this.state.rating === 0 ? this.changeRating : null
                }
                numberOfStars={5}
                name="rating"
                starDimension="17px"
                starSpacing="2px"
              />
            </Col>
          )}
        </Row>
      </ListGroup.Item>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Passenger)
