import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import Map from '../components/Map'
import ListOfPassengers from '../components/ListOfPassengers'


class OneRouteInfo extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <!--<Компонента карты>-->
            <Map/>
          </Col>
          <Col>
            <!--<Компонента списка>-->
            <ListOfPassengers/>
          </Col>
        </Row>
        <Row>
          <Col>
            <!--<Компонента даты>-->
          </Col>
          <Col>
            <!--<Компонента радактирования и удаления>-->
          </Col>
        </Row>

      </Container>
    )
  }
}

export default OneRouteInfo;