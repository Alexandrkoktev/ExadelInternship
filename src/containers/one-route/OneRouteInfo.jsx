import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Maps from '../../components/map/Maps'
import './oneRouteInfo.sass'
import ListOfPassengers from '../../components/list-of-passengers/ListOfPassengers'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/passengers'
import ListGroup from 'react-bootstrap/ListGroup'
import DeleteButton from '../../components/route-buttons/DeleteButton'
import Message from '../../components/route-buttons/Message'
import DateTimePicker from 'react-datetime-picker'

class OneRouteInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      changed: false,
      timeAndDate: null,
    }
  }

  componentDidMount() {
    const id = this.props.match.params.routeid
    this.props.requestPassengers(id)
  }

  onChange = timeAndDate => {
    this.setState({ timeAndDate: timeAndDate })
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
      deleteRoute,
    } = this.props
    const timeAndDate = new Date(
      this.state.timeAndDate || this.props.timeAndDate
    )

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
                  {!this.state.changed && (
                    <Row>
                      <Col sm="auto" md="auto">
                        <DateTimePicker
                          disabled={true}
                          clearIcon=""
                          calendarIcon=""
                          value={timeAndDate}
                        />
                      </Col>
                      <Col sm="auto" md="auto">
                        <button style={{ fontSize: '14px' }}>
                          <span
                            className="oi oi-pencil"
                            style={{ fontSize: '14px' }}
                            onClick={() => {
                              this.setState({ changed: true })
                            }}
                          />
                        </button>
                      </Col>
                    </Row>
                  )}
                  {this.state.changed && (
                    <Row>
                      <Col sm="auto" md="auto">
                        <DateTimePicker
                          onChange={this.onChange}
                          value={timeAndDate}
                        />
                      </Col>
                      <Col sm="auto" md="auto">
                        <button
                          style={{ fontSize: '14px' }}
                          onClick={() => {
                            this.props.editDate(timeAndDate, id)
                            this.setState({
                              changed: false,
                              timeAndDate: timeAndDate,
                            })
                          }}
                        >
                          Ok
                        </button>
                      </Col>
                    </Row>
                  )}
                </ListGroup>
              </Col>
            </Row>
            {enabled ? (
              <Row>
                <Col xs="auto" sm="auto" style={{ marginTop: '4%' }}>
                  <Message passengers={bookings} ride={false}/>
                </Col>
                <Col xs="auto" sm="auto" style={{ marginTop: '4%' }}>
                  <DeleteButton click={deleteRoute} id={id} />
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
)(OneRouteInfo)
