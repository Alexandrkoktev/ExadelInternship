import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Maps from '../../components/map/Maps'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/driver'
import ListGroup from 'react-bootstrap/ListGroup'

class OneRideInfo extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.rideid
    this.props.requestDriver(id)
  }

  render() {
    const {
      driverName,
      phoneNumber,
      freeSeats,
      maxSeats,
      startPointName,
      finishPointName,
      carInformation,
    } = this.props
    return (
      <div className="one-route-info">
        <div className="block">
          <Container>
            <Row>
              <Col sm="7">
                <Maps />
              </Col>
              <Col sm="5">
                <div style={{ height: 'auto', maxHeight: '262px' }}>
                  <ListGroup>
                    <h5 style={{ marginLeft: '2%', fontWeight: 'bold' }}>
                      Driver:{' '}
                    </h5>
                    <ListGroup.Item style={{ marginBottom: '4%' }}>
                      <b>Name:</b> {driverName},
                      <br />
                      <b>Phone number:</b> {phoneNumber}
                    </ListGroup.Item>
                    <h5 style={{ marginLeft: '2%', fontWeight: 'bold' }}>
                      Car information:{' '}
                    </h5>
                    <ListGroup.Item style={{ marginBottom: '4%' }}>
                      <b>Info: </b> {carInformation},
                      <br />
                      <b>Seats: </b>
                      {freeSeats}/{maxSeats}
                    </ListGroup.Item>
                    <h5 style={{ marginLeft: '2%', fontWeight: 'bold' }}>
                      From <span className="oi oi-arrow-right" /> To:{' '}
                    </h5>
                    <ListGroup.Item style={{ marginBottom: '4%' }}>
                      {startPointName} <span className="oi oi-arrow-right" />{' '}
                      {finishPointName}
                    </ListGroup.Item>
                  </ListGroup>
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
