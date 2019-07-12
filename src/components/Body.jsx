import React from 'react'
import LogIn from '../containers/LogIn'
import { Switch, Route } from 'react-router-dom'
import Routes from '../containers/Routes'

class Body extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/routes" component={Routes} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    )
  }
}

export default Body
