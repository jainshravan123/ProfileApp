import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { browserHistory } from 'react-router'
import Profile from './components/profile/profile.jsx'

class Routes extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <div>
          <Switch>
            <Route path='/profile' component={() => (<Profile />)} />
            <Redirect to={{pathname: '/profile'}} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routes
