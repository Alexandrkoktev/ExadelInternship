import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import RoutesList from '../../components/list-of-routes/RoutesList'
// eslint-disable-next-line no-unused-vars
import NewRouteInfo from '../../components/new-route-info/NewRouteInfo'
// eslint-disable-next-line no-unused-vars
import Map from '../../components/map/Map'
import Route from '../../components/list-components/Route'
// eslint-disable-next-line no-unused-vars
class NewRoute extends React.Component {
  createList = (num, text) => {
    let list = []
    for (let i = 0; i < num; i++) {
      list.push(<Route routeid={i} my_text={text} buttontext="Join" />)
    }
    return list
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={6}>
            <ListGroup>
              <NewRouteInfo />
            </ListGroup>
          </Col>
          <Col sm={6}>
            <Map />
          </Col>
        </Row>
      </Container>
    )
  }
}
export default NewRoute
