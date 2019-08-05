import React from 'react'
// eslint-disable-next-line no-unused-vars
import Container from 'react-bootstrap/Container'
// eslint-disable-next-line no-unused-vars
import Row from 'react-bootstrap/Row'
// eslint-disable-next-line no-unused-vars
import Col from 'react-bootstrap/Col'
// eslint-disable-next-line no-unused-vars
import Maps from '../../components/map/Maps'
// eslint-disable-next-line no-unused-vars
import './oneRouteInfo.sass'
// eslint-disable-next-line no-unused-vars
import ListOfPassengers from '../../components/list-of-passengers/ListOfPassengers'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/passengers'
import ListGroup from 'react-bootstrap/ListGroup'

class OneRouteInfo extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.routeid
    this.props.requestPassengers(id)
  }

  render() {
    const {
      passengers: { bookings } = [],
      freeSeats,
      maxSeats,
      startPointName,
      finishPointName,
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
                <h5 className="title-list">List of passengers:</h5>
                <div className="scrollable list-passengers-style">
                  <ListOfPassengers passengers={bookings} />
                </div>
                <ListGroup>
                  <h5 className="title-list">
                    From <span className="oi oi-arrow-right" /> To:{' '}
                  </h5>
                  <ListGroup.Item className="list-item-style">
                    {startPointName} <span className="oi oi-arrow-right" />{' '}
                    {finishPointName}
                  </ListGroup.Item>
                  <h5 className="title-list">Car information: </h5>
                  <ListGroup.Item className="list-item-style">
                    <b>Seats: </b>
                    {freeSeats}/{maxSeats}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row style={{ marginLeft: '1%' }}>
              <Col xs="auto" sm="auto" style={{ marginTop: '4%' }}>
                <span className="oi oi-pencil" style={{ fontSize: '25px' }} />
              </Col>
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
)(OneRouteInfo)
