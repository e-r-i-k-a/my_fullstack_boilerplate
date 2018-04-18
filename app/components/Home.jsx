import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import Slider from './Slider'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: ''
    };
    this.doSomething = this.doSomething.bind(this);
  }

  componentDidMount() {
    // axios.get('API')
    // .then(res => res.data)
    // .then((stuff => {
    //   this.setState({stuff})
    // })
    // or
    // window.fetch('API')
    //   .then(res => res.json())
    //   .then((items) => {
    //     return this.setState({})
    //   })
  }

  doSomething(e, id) {
    e.preventDefault();
  }

  render() {
    console.log('state', this.state)
    return (
      <div>
        <h1>Hello from Home Component</h1>
        <Slider />
      </div>
    )
  }
}
