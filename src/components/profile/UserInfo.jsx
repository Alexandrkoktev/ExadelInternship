import React from 'react'
import { Row, Col } from 'react-bootstrap'
import user from '../../img/user.jpg'
import StarRatings from 'react-star-ratings'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../commands/user'
import './style.sass'

class UserInfo extends React.Component {
  render() {
    const { userInfo } = this.props
    return (
      <div>
        <Row>
          <Col md="auto">
            <img src={user} alt="user" />
          </Col>
          <Col md="auto">
            <div>
              <h3>{userInfo.username}</h3>
              <Row>
                <StarRatings
                  rating={4.5}
                  starDimension="21px"
                  starSpacing="5px"
                />{' '}
                <h4 className="left-marg">as a Driver</h4>
              </Row>
              <Row>
                <StarRatings
                  rating={3.5}
                  starDimension="21px"
                  starSpacing="5px"
                />{' '}
                <h4 className="left-marg">as a Passenger</h4>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps)(UserInfo)
