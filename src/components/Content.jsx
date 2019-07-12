import React from 'react'
import LogIn from '../containers/LogIn'
import { Switch, Route } from 'react-router-dom'
import Routes from '../containers/Routes'
import OneRouteInfo from '../containers/OneRouteInfo'

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LogIn} />
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
