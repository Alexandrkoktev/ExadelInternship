import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col, ListGroup, Form } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import RoutesList from '../../components/list-of-routes/RoutesList'
// eslint-disable-next-line no-unused-vars
import NewRouteInfo from '../../components/new-route-info/NewRouteInfo'
// eslint-disable-next-line no-unused-vars
import Maps from '../../components/map/Maps'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/new-ride-comm/rides'

class NewRoute extends React.Component {
  componentDidMount() {
    this.props.requestRides()
  }
  render() {
    const { rides } = this.props
    return (
      <Container>
        <Row>
          <Col sm={6}>
            <ListGroup>

              <NewRouteInfo />
              <RoutesList type="From Favourites" rides={rides} />
            </ListGroup>
          </Col>
          <Col sm={6}>
            <Maps />
          </Col>
        </Row>
      </Container>
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRoute)
