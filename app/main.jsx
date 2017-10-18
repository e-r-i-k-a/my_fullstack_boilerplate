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

render (
  <Provider store={store}>
    <Router>
      <div>
        <div>
          <NavBar />
        </div>
      <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/students" component={Students}/>
          <Route path="/campus/:id" component={Campus}/>
          {/* <Route path="/students" render={() => <Student users={this.state.users} />}/> */}
            {/* //this is how you pass props down to a component */}
          {/* <Route path="/campuses" component={Campuses}/> */}
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
