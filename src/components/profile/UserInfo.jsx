import React from 'react'
import { Row, Col } from 'react-bootstrap'
import user from '../../img/user.jpg'
import StarRatings from 'react-star-ratings'
import { connect } from 'react-redux'

class UserInfo extends React.Component {

  render() {
    const {userInfo} = this.props
    return (
      <div>
        <Row>
          <Col xs={3}>
            <img src={user} alt="user" />
          </Col>
          <Col>
            <div>
              <Row>
                <StarRatings
                  rating={4.5}
                  starDimension="40px"
                  starSpacing="15px"
                /> <h3 style={{ margin: '1%' }}>as a Driver</h3></Row>
              <Row>
                <StarRatings
                  rating={3.5}
                  starDimension="40px"
                  starSpacing="15px"
                /> <h3 style={{ margin: '1%' }}>as a Passenger</h3></Row>
              <h3>{userInfo.username}</h3>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

export default connect(mapStateToProps)(UserInfo)
