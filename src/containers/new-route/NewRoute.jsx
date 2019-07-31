import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import RoutesList from '../../components/list-of-routes/RoutesList'
// eslint-disable-next-line no-unused-vars
import NewRouteInfo from '../../components/new-route-info/NewRouteInfo'
// eslint-disable-next-line no-unused-vars
import Maps from '../../components/map/Maps'
import { connect } from 'react-redux'
import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../commands/rides'
import client from '../../commands/axios'


class NewRoute extends React.Component {
  componentDidMount() {
    this.props.requestRides()
    this.mapComponent = React.createRef();
  }

  render() {
    const { rides } = this.props
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <ListGroup>
              <NewRouteInfo />
              <RoutesList type="From Favourites" rides={rides} />
            </ListGroup>
            <Button
                className="right"
                variant="dark"
                type="submit"
                onClick={async (event) => {
                  event.preventDefault();
                  const route =  await this.mapComponent.current.getRouteInfo();
                  await client({
                    url: '/api/addRoute/',
                    method: 'post',
                    data: {
                      timeAndDate: new Date(2020, 0, 1).toJSON(),
                      maxSeats: 4,
                      carId: 1,
                      favourite: false,
                      favouriteRouteId: 0,
                      routeURL: 0,
                      ...route,
                    },
                  })
                  // event.preventDefault();
                }}
              >
                Create route
              </Button>
          </Col>
          <Col sm={6}>
            <Maps needRouteEditor={true} ref={this.mapComponent}/>
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
