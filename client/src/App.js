import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { DragDropContext } from 'react-beautiful-dnd'

import useCheckAuth from './hooks/useCheckAuth'
import Header from './Components/UI/Header'
import Landing from './Components/Landing/Landing'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Dashboard from './Components/Dashboard/Dashboard'
import Projects from './Components/Projects/Projects'

const App = () => {
  useCheckAuth()
  return (
    <>
      <Header />
      <DragDropContext onDragEnd={e => {}}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/projects/:id" component={Projects} />
        </Switch>
      </DragDropContext>
    </>
  )
}

export default App;
