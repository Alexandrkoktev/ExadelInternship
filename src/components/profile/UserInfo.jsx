import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Row, Col } from 'react-bootstrap'
import user from '../../img/user.jpg'
// eslint-disable-next-line no-unused-vars
import StarRatings from 'react-star-ratings'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/user'
import './style.sass'
// eslint-disable-next-line no-unused-vars
import Image from 'react-bootstrap/Image'

class UserInfo extends React.Component {
  render() {
    const { userInfo } = this.props
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
            <Row>
              <h4>{userInfo.username}</h4>
            </Row><Row>
              <h4>{userInfo.phoneNumber}</h4>
            </Row>
            <Row>
              <StarRatings
                rating={userInfo.ratingDriver}
                starDimension="21px"
                starSpacing="5px"
                className='left-marg'
              />{' '}
              <h4 className="left-marg">as a Driver</h4>
            </Row>
            <Row>
              <StarRatings
                rating={userInfo.ratingPassenger}
                starDimension="21px"
                starSpacing="5px"
              />{' '}
              <h4 className="left-marg">as a Passenger</h4>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
