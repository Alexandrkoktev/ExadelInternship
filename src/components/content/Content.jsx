import React from 'react'
import LogIn from '../../containers/login/LogIn'
import { Switch, Route } from 'react-router-dom'
import Routes from '../../containers/routes/Routes'
import Profile from '../../containers/profile/Profile'
import Home from '../../containers/home/Home'
import NewRoute from '../../containers/new-route/NewRoute'
import OneRouteInfo from '../../containers/one-route/OneRouteInfo'
import NewRide from '../../containers/new-ride/NewRide'
import Notifications from '../../containers/notifications/Notifications'
import { connect } from 'react-redux'
import Statistics from '../../containers/statistics/Statistics'
import { mapStateToProps } from '../../commands/content'
import OneRideInfo from '../../containers/one-ride/OneRideInfo'

class Content extends React.Component {
  guestUser() {
    const { userInfo } = this.props
    if (!userInfo.checked) {
      return <Route exact path="/login" component={LogIn} />
    }
  }

  userRoutes() {
    const { userInfo } = this.props
    const isLoggedIn = Boolean(userInfo.username)
    if (!isLoggedIn) {
      return <Route exact path="/login" component={LogIn} />
    }
    return [
      <Route exact path="/home" component={Home} key={1} />,
      <Route exact path="/home/new-ride" component={NewRide} key={2} />,
      <Route exact path="/home/new-route" component={NewRoute} key={3} />,
      <Route exact path="/routes" component={Routes} key={4} />,
      <Route exact path="/notifications" component={Notifications} key={5} />,
      <Route
        exact
        path="/routes/route-info/:routeid"
        component={OneRouteInfo}
        key={6}
      />,
      <Route
        exact
        path="/routes/ride-info/:rideid"
        component={OneRideInfo}
        key={10}
      />,
      <Route exact path="/profile" component={Profile} key={7} />,
      <Route exact path="/new-ride" component={NewRide} key={8} />,
      <Route render={() => <h1>Page not found</h1>} key={9} />,
    ]
  }

  adminRoutes() {
    const { userInfo } = this.props
    const isAdministrator = userInfo.role === 'ROLE_ADMINISTRATOR'
    if (isAdministrator) {
      return <Route exact path="/statistics" component={Statistics} />
    }
    return this.userRoutes()
  }

  render() {
    return (
      <Switch>
        {this.guestUser()}
        {this.adminRoutes()}
        {this.userRoutes()}
      </Switch>
    )
  }
}

export default connect(mapStateToProps)(Content)
