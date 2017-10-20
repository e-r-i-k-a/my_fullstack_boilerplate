'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import store from './store'
import Home from './components/Home'
import Students from './components/Students'
import Campus from './components/Campus'
import AddStudent from './components/AddStudent'
import Student from './components/Student'

render (
  <Provider store={store}>
    <Router>
      <div>
        <div>
          <NavBar />
        </div>
      <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/students" component={Students}/>
          <Route exact path="/campus/:id" component={Campus}/>
          <Route exact path="/student/new" component={AddStudent}/>
          <Route exact path='/students/:id' component={Student}/>
          <Redirect to="/home"/>
      </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)

// render (
//   <Provider store={store}>
//     <Root/>
//   </Provider>,
//   document.getElementById('main')
// )
