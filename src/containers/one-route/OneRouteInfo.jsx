import React from 'react'
// eslint-disable-next-line no-unused-vars
import Container from 'react-bootstrap/Container'
// eslint-disable-next-line no-unused-vars
import Row from 'react-bootstrap/Row'
// eslint-disable-next-line no-unused-vars
import Col from 'react-bootstrap/Col'
// eslint-disable-next-line no-unused-vars
import Button from 'react-bootstrap/Button'
// eslint-disable-next-line no-unused-vars
import Maps from '../../components/map/Maps'
// eslint-disable-next-line no-unused-vars
import DateSelector from '../../components/date/DateSelector'
import './oneRouteInfo.sass'
// eslint-disable-next-line no-unused-vars
import ListOfPassengers from '../../components/list-of-passengers/ListOfPassengers'
// eslint-disable-next-line no-unused-vars
import EditDate from '../../components/edit-date/EditDate'
// eslint-disable-next-line no-unused-vars
import DeleteButton from '../../components/delete-button/DeleteButton'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/passengers'

class OneRouteInfo extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.routeid
    this.props.requestPassengers(id)
  }

  render() {
    const { passengers: { bookings } = [] } = this.props
    return (
      <div className="one-route-info">
        <div className="block">
          <Container>
            <Row>
              <Col sm="7" style={{ height: '278px', marginTop: '1%' }}>
                <Maps />
              </Col>
              <Col sm="5">
                <h5 style={{ marginLeft: '4.4%' }}>List of passengers:</h5>
                <div
                  style={{ height: 'auto', maxHeight: '262px' }}
                  className="scrollable"
                >
                  <ListOfPassengers passengers={bookings} />
                </div>
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
