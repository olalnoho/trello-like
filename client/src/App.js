import React from 'react'
import { Switch, Route } from 'react-router-dom'

import useCheckAuth from './hooks/useCheckAuth'
import Header from './Components/UI/Header'
import Landing from './Components/Landing/Landing'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'

const App = () => {
  useCheckAuth()
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  )
}

export default App;
