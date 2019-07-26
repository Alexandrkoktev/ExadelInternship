import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Row, Col } from 'react-bootstrap'
import user from '../../img/user.jpg'
// eslint-disable-next-line no-unused-vars
import StarRatings from 'react-star-ratings'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../commands/user'
// eslint-disable-next-line no-unused-vars
import Image from 'react-bootstrap/Image'

class UserInfo extends React.Component {
  render() {
    const { userInfo } = this.props
    return (
      <div>
        <Row>
          <Col xs={3}>
            <Image src={
              typeof userInfo.photoUrl === 'undefined'
                ? user
                : userInfo.photoUrl
            } roundedCircle
                   width="160"
                   height="160"/>
          </Col>
          <Col>
            <div>
              <Row>
                <StarRatings
                  rating={4.5}
                  starDimension="40px"
                  starSpacing="15px"
                />{' '}
                <h3 style={{ margin: '1%' }}>as a Driver</h3>
              </Row>
              <Row>
                <StarRatings
                  rating={3.5}
                  starDimension="40px"
                  starSpacing="15px"
                />{' '}
                <h3 style={{ margin: '1%' }}>as a Passenger</h3>
              </Row>
              <h3>{userInfo.username}</h3>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps)(UserInfo)
