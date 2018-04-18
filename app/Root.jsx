import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import store from './store'
import Home from './components/Home'
import Articles from './components/Articles'

render(
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <NavBar />
        </nav>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path='/articles/:id' component={Articles} />
          <Redirect to='/home' />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
