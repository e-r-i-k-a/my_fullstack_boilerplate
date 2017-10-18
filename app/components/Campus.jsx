import React, { Component } from 'react';
import axios from 'axios';

export default class Campus extends Component {
	constructor (props) {
		super(props);
		this.state = {
      campus: {},
		};
	}

	componentDidMount () {
		axios.get('/api/campuses/'+ this.props.match.params.id)
    .then(res => {
      return res.data
    })
		.then(campus => {
      this.setState({campus})
    })
	}

	render () {
console.log('this.state,',this.state)
    let campusId = this.props.match.params.id;

		return (
      <div id="Campus">
        <h1>Hello from {this.state.campus.name}</h1>
 			</div>
    )

	}
}
