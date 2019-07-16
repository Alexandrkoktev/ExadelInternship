import React from 'react'
import LogIn from '../../containers/login/LogIn'
import { Switch, Route } from 'react-router-dom'
import Routes from '../../containers/routes/Routes'
import OneRouteInfo from '../../containers/routeinfo/OneRouteInfo'
import Home from '../../containers/home/Home';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/routes" component={Routes} />
        <Route
          exact
          path="/routes/route-info/:routeid"
          component={OneRouteInfo}
        />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    )
  }
}

export default Content
