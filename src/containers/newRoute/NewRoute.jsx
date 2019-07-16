import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import FavouritesList from '../../components/ListOfFavourites/FavouritesList'
// eslint-disable-next-line no-unused-vars
import NewRouteInfo from '../../components/NewRouteInfo/NewRouteInfo'
// eslint-disable-next-line no-unused-vars
class NewRoute extends React.Component {
  render() {
    return (
      <Container style={{ marginLeft: '5rem' }}>
        <Row>
          <Col sm={6}>
            <ListGroup>
              <FavouritesList />
              <NewRouteInfo />
            </ListGroup>
          </Col>
          <Col sm={6}>Map</Col>
        </Row>
      </Container>
    )
  }
}
export default NewRoute
