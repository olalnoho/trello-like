import React from 'react'
import { Switch, Route } from 'react-router-dom'

import useCheckAuth from './hooks/useCheckAuth'
import Header from './Components/UI/Header'
import Landing from './Components/Landing/Landing'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Dashboard from './Components/Dashboard/Dashboard'

const App = () => {
  useCheckAuth()
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  )
}

export default App;
