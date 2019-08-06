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
import DeleteButton from '../../components/route-buttons/DeleteButton'
import EditDate from '../../components/route-buttons/EditDate'
import Message from '../../components/route-buttons/Message'

class OneRouteInfo extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.routeid
    this.props.requestPassengers(id)
  }

  render() {
    const {
      passengers: { bookings = [], enabled },
      freeSeats,
      maxSeats,
      startPointName,
      finishPointName,
      startPoint,
      finishPoint,
      viaPoints,
      deleteRoute
    } = this.props
    const driverInfo = {
      bookings,
      startPoint,
      finishPoint,
      viaPoints,
    }
    const id = this.props.match.params.routeid
    return (
      <div className="one-route-info">
        <div className="block">
          <Container>
            <Row>
              <Col sm="7">
                <Maps driverInfo={driverInfo} />
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
                    <b>Free seats / All seats: </b>
                    {freeSeats}/{maxSeats}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            {enabled ?
              <Row>
                <Col xs="auto" sm="auto" style={{ marginTop: '4%' }}>
                  <EditDate />
                </Col>
                <Col xs="auto" sm="auto" style={{ marginTop: '4%' }}>
                  <Message />
                </Col>
                <Col xs="auto" sm="auto" style={{ marginTop: '4%' }}>
                  <DeleteButton click={deleteRoute} id={id} />
                </Col>
              </Row> : <></>}
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
