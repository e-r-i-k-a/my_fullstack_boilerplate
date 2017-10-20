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
    this.deleteCampus = this.deleteCampus.bind(this);
  }

	componentDidMount () {
		axios.get('/api/campuses/')
		.then(res => res.data)
		.then(campuses => {
      this.setState({campuses})
    })
	}

  deleteCampus(event, id) {
		event.preventDefault();
		axios.delete('/api/campuses/'+id)
    .then(()=>axios.get('/api/campuses'))
    .then(res => res.data)
    .then(campuses => this.setState({campuses}))
  }

  render() {
   const campuses=(this.state.campuses)
   console.log(campuses)
    return (
      <div>
        <h1>hello world</h1>
        <div id="home-campuses">
          {campuses.map(campus => {
            return <span>
              <Link to = {'/campus/'+ campus.id} key={campus.id}>
                <img src={campus.image} key={campus.image} width='200' height='200'/>
              </Link>
              <img
                src='/delete_img.png'
                onClick={(event) => this.deleteCampus(event, campus.id)}
                key={campus.name}
                className = 'delete-img'/>
            </span>}
           )}
        </div>
      </div>
    )
  }
}
