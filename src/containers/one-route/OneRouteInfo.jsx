import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Map from '../../components/map/Map'
import DateSelector from '../../components/date/DateSelector'
import './oneRouteInfo.scss'
import ListOfPassengers from '../../components/list-of-passengers/ListOfPassengers'
import EditDate from '../../components/edit-date/EditDate'
import DeleteButton from '../../components/delete-button/DeleteButton'

class OneRouteInfo extends React.Component {
  sayHi = text => {
    alert('Hi!' + text)
  }

  render() {
    return (
      <div className="one-route-info">
        <div className="block">
          <Container>
            <Row>
              <Col sm="6">
                <Map />
              </Col>
              <Col sm="6">
                <ListOfPassengers />
              </Col>
            </Row>
            <Row>
              <Col sm="2">
                <div class="date-selector-button">
                  <DateSelector />
                </div>
              </Col>
              <Col sm="2">
                <EditDate />
              </Col>
            </Row>
            <Row>
              <Col sm="11">
                <DeleteButton click={this.sayHi} />
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

export default OneRouteInfo
