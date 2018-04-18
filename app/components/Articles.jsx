import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

export default class Articles extends Component {
	constructor (props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount () {
    //hit API
		// .then(res => res.data)
		// .then(stuff => {
    //   this.setState({stuff})
    // })
	}

  doSomething (e, id) {
		e.preventDefault();
	}

	render () {
		return (
			<div>
				<h1>Hello from Articles Component</h1>
			</div>
		)
	}
}
