import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Maps from '../../components/map/Maps'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/driver'
import ListGroup from 'react-bootstrap/ListGroup'
import DeleteButton from '../../components/route-buttons/DeleteButton'
import Message from '../../components/route-buttons/Message'
import { formatDate } from '../../util'
import DateTimePicker from 'react-datetime-picker'
import RateDriver from '../../components/route-buttons/RateDriver'

class OneRideInfo extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.rideid
    this.props.requestDriver(id)
  }

  render() {
    const {
      driverName,
      driverRating,
      phoneNumber,
      freeSeats,
      maxSeats,
      startPointName,
      finishPointName,
      carInformation,
      viaPoints,
      meetPoint,
      destinationPoint,
      startPoint,
      finishPoint,
      deleteBooking,
      enabled,
      rateDriver,
      rating
      timeAndDate,
    } = this.props
    const passengerInfo = {
      viaPoints,
      meetPoint,
      destinationPoint,
      startPoint,
      finishPoint,
    }
    const id = this.props.match.params.rideid
    return (
      <div className="one-route-info">
        <div className="block">
          <Container>
            <Row>
              <Col sm="7">
                <Maps passengerInfo={passengerInfo} />
              </Col>
              <Col sm="5">
                <div style={{ height: 'auto', maxHeight: '262px' }}>
                  <ListGroup>
                    <h5 className="title-list">Driver: </h5>
                    <ListGroup.Item className="list-item-style">
                      <b>Name:</b> {driverName},
                      <br />
                      <b>Phone number:</b> {phoneNumber}
                      <br />
                      <RateDriver enabled={enabled} driverRating={driverRating}
                        id={id} rateDriver={rateDriver} rating={rating} />
                    </ListGroup.Item>
                    <h5 className="title-list">Car information: </h5>
                    <ListGroup.Item className="list-item-style">
                      <b>Info: </b> {carInformation},
                      <br />
                      <b>Free seats / All seats: </b>
                      {freeSeats}/{maxSeats}
                    </ListGroup.Item>
                    <h5 className="title-list">
                      From <span className="oi oi-arrow-right" /> To:{' '}
                    </h5>
                    <ListGroup.Item className="list-item-style">
                      {startPointName} <span className="oi oi-arrow-right" />{' '}
                      {finishPointName}
                    </ListGroup.Item>
                    <Row style={{ marginLeft: '1%' }}>
                      <DateTimePicker
                        disabled={true}
                        clearIcon=""
                        calendarIcon=""
                        value={new Date(timeAndDate)}
                      />
                    </Row>
                  </ListGroup>
                </div>
              </Col>
            </Row>
            {enabled ? (
              <Row style={{ marginLeft: '1%' }}>
                <Col xs="auto" sm="auto" style={{ marginTop: '4%' }}>
                  <Message ride={true} driver={{ id, name: driverName }} />
                </Col>
                <Col xs="auto" sm="auto" style={{ marginTop: '4%' }}>
                  <DeleteButton click={deleteBooking} id={id} />
                </Col>
              </Row>
            ) : (
                <></>
              )}
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
