import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      campuses: []
    };
    // this.func1 = this.func1.bind(this)
  }

	componentDidMount () {
		axios.get('/api/campuses/')
		.then(res => res.data)
		.then(campuses => {
      this.setState({campuses})
      console.log(campuses)
    })
	}

  // func1() {
  //   this.setState({
  //     answered: false,
  //   })
  // }

  render() {
   const campuses=(this.state.campuses)
    return (
      <div>
        <h1>hello world</h1>
        <div id="home-campuses">
          {campuses.map(campus => {
            return <Link to = {'/campus/'+ campus.id}>
              <img key={campus.id} src={campus.image}/>
            </Link>}
           )}
        </div>
      </div>
    )
  }
}
