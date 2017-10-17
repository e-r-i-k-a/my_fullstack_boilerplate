import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {};
    //set state with results of axios request
    this.func1 = this.func1.bind(this)
    this.func2 = this.func2.bind(this)
  }

  componentDidMount() {
    this.func1()
    //make an aync axios call to api route for all campuses
  }

  func1() {
    this.setState({
      answered: false,
    })
  }

  func2() {
    this.setState({
      answered: true
    })
  }

  render() {
    // if (!this.state) { return null }
    // const {joke, answered} = this.state
    return (
      <div>
        <h1>hello world</h1>
        <div id="home-campuses">
          <img src="/luna.png"></img>
          {/* //give each a name of the campus from the campus array */}
          <img src="/mars.png"></img>
          <img src="/terra.png"></img>
          <img src="/titan.png"></img>
        </div>
      </div>
    )
  }
}
