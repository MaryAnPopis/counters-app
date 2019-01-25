import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import App from './components/App'
import Error from './components/Error'
import PrivateRoute from './components/PrivateRoute'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={App} />
      <Route component={Error} />
    </Switch>
  </main>
)

export default Routes
