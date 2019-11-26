import React, { useEffect, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import { AuthContext } from './Context/AuthContext'
import Header from './Components/UI/Header'
import Landing from './Components/Landing/Landing'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'

const App = () => {
  const { setUserDetails, setIsAuth } = useContext(AuthContext)
  useEffect(() => {
    axios.get('/api/auth/me')
      .then(res => {
        if (res.status === 200) {
          setUserDetails(res.data)
          setIsAuth(true)
        }
      })
  }, [setUserDetails, setIsAuth])
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
