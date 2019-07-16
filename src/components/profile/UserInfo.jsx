import React from 'react'
import { Row, Col } from 'react-bootstrap'
import user from '../../img/user.jpg'
import StarRatings from 'react-star-ratings'

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.username,
      stars: props.stars,
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={3}>
            <img src={user} alt="user" />
          </Col>
          <Col>
            <div>
              <StarRatings
                rating={this.state.stars}
                starDimension="40px"
                starSpacing="15px"
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UserInfo
