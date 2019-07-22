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
import Map from '../../components/map/Map'
// eslint-disable-next-line no-unused-vars
import DateSelector from '../../components/date/DateSelector'
import './oneRouteInfo.scss'
// eslint-disable-next-line no-unused-vars
import ListOfPassengers from '../../components/list-of-passengers/ListOfPassengers'
// eslint-disable-next-line no-unused-vars
import EditDate from '../../components/edit-date/EditDate'
// eslint-disable-next-line no-unused-vars
import DeleteButton from '../../components/delete-button/DeleteButton'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/info-about-passengers/passengers'

class OneRouteInfo extends React.Component {
  componentDidMount() {
    this.props.requestPassengers()
  }

  render() {
    const { passengers } = this.props
    return (
      <div className="one-route-info">
        <div className="block">
          <Container>
            <Row>
              <Col sm="6">
                <Map/>
              </Col>
              <Col sm="6">
                <ListOfPassengers passengers={passengers}/>
              </Col>
            </Row>
            <Row>
              <Col sm="2">
                <div className="date-selector-button">
                  <DateSelector/>
                </div>
              </Col>
              <Col sm="2">
                <EditDate/>
              </Col>
            </Row>
            <Row>
              <Col sm="11">
                <DeleteButton/>
              </Col>
              <Col sm="1">
                <Button variant="dark">Ok</Button>
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
  mapDispatchToProps,
)(OneRouteInfo)
