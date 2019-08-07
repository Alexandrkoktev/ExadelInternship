import React from 'react'
import { Row, Col } from 'react-bootstrap'
import user from '../../img/user.jpg'
import StarRatings from 'react-star-ratings'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/user'
import './style.sass'
import Image from 'react-bootstrap/Image'

class UserInfo extends React.Component {
  render() {
    const { userInfo } = this.props
    debugger
    return (
      <div>
        <Row>
          <Col xs={3}>
            <Image
              src={
                typeof userInfo.photoUrl === 'undefined'
                  ? user
                  : userInfo.photoUrl
              }
              roundedCircle
              width="160"
              height="160"
            />
          </Col>
          <Col md="auto">
            <div>
              <h3 className="textOverflow">{userInfo.username}</h3>
              <h5 className="textOverflow">{userInfo.phoneNumber}</h5>
              <Row className="mid">
                <StarRatings
                  rating={userInfo.ratingDriver || 0}
                  starDimension="21px"
                  starSpacing="5px"
                />{' '}
                <h4 className="left-marg">as a Driver</h4>
              </Row>
              <Row className="mid">
                <StarRatings
                  rating={userInfo.ratingPassenger || 0}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)
