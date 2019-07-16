import React from 'react'
import LogIn from '../../containers/login/LogIn'
// eslint-disable-next-line no-unused-vars
import { Switch, Route } from 'react-router-dom'
import Routes from '../../containers/routes/Routes'
import OneRouteInfo from '../../containers/one-route/OneRouteInfo'
import NewRoute from '../../containers/newRoute/NewRoute'
import Home from '../../containers/Home'
import Profile from '../../containers/profile/Profile'

class Content extends React.Component {
  render() {
    var flag = false
    return (
      <Switch>
        <Route exact path="/" component={flag ? Home : LogIn} />
        <Route exact path="/routes" component={Routes} />
        <Route
          exact
          path="/routes/route-info/:routeid"
          component={OneRouteInfo}
        />
        <Route exact path="/new-ride" component={NewRoute} />
        <Route exact path="/profile" component={Profile} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    )
  }
}

export default Content
