import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Tab, Nav, Button, ListGroup } from 'react-bootstrap'
import './profile.sass'
// eslint-disable-next-line no-unused-vars
import Route from '../../components/list-components/Route'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import UserInfo from '../../components/profile/UserInfo'
// eslint-disable-next-line no-unused-vars
import CarsList from '../../components/profile/CarsList'
// eslint-disable-next-line no-unused-vars
import PreviousRoute from '../../components/list-components/PreviousRoute'
import { connect } from 'react-redux'
import {
  mapStateToProps,
  mapDispatchToProps,

} from '../../commands/new-ride-comm/rides'
// eslint-disable-next-line no-unused-vars
import FavouriteRoute from '../../components/favourite-routes/FavouriteRoute'


class Profile extends React.Component {
  componentDidMount() {
    this.props.requestRides()
  }

  render() {
    const { rides = [] } = this.props
    const dRidesArr = rides.map(item => {
      return (
        <FavouriteRoute
          routeid={item.routeId}
          key={item.id}
          depPoint={item.startPointName}
          destPoint={item.endPointName}
          name={item.name}
        />
      )
    })
    const prevRides = rides.map(item => {
      return (
        <PreviousRoute
          depPoint={item.startPointName}
          destPoint={item.endPointName}
          key={item.id}
        />
      )
    })
    return (
      <>
        <UserInfo />
        <Tab.Container defaultActiveKey="history">
          <Nav fill variant='tabs' >
            <Nav.Item className='tabs'>
              <Nav.Link eventKey="history" className='text'>
                My History
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='tabs'>
              <Nav.Link eventKey="favroutes" className='text'>
                My Favorite Routes
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='tabs'>
              <Nav.Link eventKey="cars" className='text'>
                My Cars
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="favroutes">
              {dRidesArr.length === 0 ? (
                <div className="noStuff">No favourites yet</div>
              ) : (
                  <ListGroup>{dRidesArr}</ListGroup>
                )}
            </Tab.Pane>
            <Tab.Pane eventKey="cars">
              <CarsList />
            </Tab.Pane>
            <Tab.Pane eventKey="lastroutes">
              <ListGroup>{prevRides}</ListGroup>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
