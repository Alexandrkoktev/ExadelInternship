import React from 'react'
import LogIn from '../../containers/login/LogIn'
// eslint-disable-next-line no-unused-vars
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
import { Redirect } from 'react-router'

class Content extends React.Component {
  render() {
    const { userInfo } = this.props
    let isAdministrator = false
    const isLoggedIn = !!userInfo.username

    if (userInfo.role === 'ADMINISTRATOR') {
      isAdministrator = true
    }

    const PrivateRouteForAdmin = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        isAdministrator === true
          ? <Component {...props} />
          : <Redirect to='/home'/>
      )}/>
    )

    const PrivateRouteForLogIn = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        isLoggedIn === false
          ? <Component {...props} />
          : <Redirect to='/home'/>
      )}/>
    )

    return (
      <Switch>
        <PrivateRouteForLogIn exact path="/login" component={LogIn}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/home/new-ride" component={NewRide}/>
        <Route exact path="/home/new-route" component={NewRoute}/>
        <Route exact path="/routes" component={Routes}/>
        <Route exact path="/notifications" component={Notifications}/>
        <Route
          exact
          path="/routes/route-info/:routeid"
          component={OneRouteInfo}
        />
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/new-ride" component={NewRide}/>
        <PrivateRouteForAdmin exact path="/statistics" component={Statistics}/>
        <Route render={() => <h1>Page not found</h1>}/>
      </Switch>
    )
  }
}

export const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

export default connect(
  mapStateToProps,
)(Content)
