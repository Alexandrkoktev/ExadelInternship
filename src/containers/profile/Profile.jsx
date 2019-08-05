import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Tab, Nav, ListGroup } from 'react-bootstrap'
import './profile.sass'
// eslint-disable-next-line no-unused-vars
import UserInfo from '../../components/profile/UserInfo'
// eslint-disable-next-line no-unused-vars
import CarsList from '../../components/profile/CarsList'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/rides'
// eslint-disable-next-line no-unused-vars
import FavouriteRoute from '../../components/favourite-routes/FavouriteRoute'

class Profile extends React.Component {
  componentDidMount() {
    this.props.getFavourites()
  }

  render() {
    const { favourites = [] } = this.props
    const dRidesArr = favourites.map(item => {
      return (
        <FavouriteRoute
          routeid={item.routeId}
          key={item.routeId}
          depPoint={item.startPointName}
          destPoint={item.endPointName}
          name={item.name}
          id={item.routeId}
        />
      )
    })
    return (
      <>
        <UserInfo />
        <Tab.Container defaultActiveKey="favroutes">
          <Nav fill variant="tabs">
            <Nav.Item className="tabs">
              <Nav.Link eventKey="favroutes" className="text">
                My Favorite Routes
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="tabs">
              <Nav.Link eventKey="cars" className="text">
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
