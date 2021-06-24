import React, { Component } from 'react'
import './App.less'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Login from './pages/login'
import Home from './pages/home'
import SuperAdmin from './pages/superAdmin'
import NotFound from './pages/404notFound'



export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/superAdmin" component={SuperAdmin} />
          <Route path="/notFound" component={NotFound} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    )
  }
}

