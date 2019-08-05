import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Maps from '../../components/map/Maps'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/driver'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

class OneRideInfo extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.rideid
    this.props.requestDriver(id)
  }

  render() {
    debugger
    const { driverName, phoneNumber } = this.props
    console.log(this.props)
    return (
      <div className="one-route-info">
        <div className="block">
          <Container>
            <Row>
              <Col sm="7" style={{ height: '278px', marginTop: '1%' }}>
                <Maps />
              </Col>
              <Col sm="5">
                <h5 style={{ marginLeft: '4.4%' }}>Driver: </h5>
                <div style={{ height: 'auto', maxHeight: '262px' }}>
                  <ListGroupItem>
                    Name: {driverName}, Phone number: {phoneNumber}
                  </ListGroupItem>
                </div>
              </Col>
            </Row>

            <Row style={{ marginLeft: '1%' }}>
              <Col xs="auto" sm="auto" style={{ marginTop: '4%' }}>
                <span
                  className="oi oi-envelope-closed"
                  style={{ fontSize: '25px' }}
                />
              </Col>
              <Col xs="auto" sm="auto" style={{ marginTop: '4%' }}>
                <span className="oi oi-trash" style={{ fontSize: '25px' }} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneRideInfo)
