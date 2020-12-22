import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from "history"
import Home from '../pages/Home'

const history = createBrowserHistory()

const Routes = () => (
  <Router history={history}>
    <Switch>
        <Route path="/" exact component={Home} />
    </Switch>
  </Router>
)

export default Routes