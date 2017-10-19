import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export default class AddStudent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			campuses: [],
			inputValue: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount () {
		axios.get('/api/campuses/')
		.then(res => res.data)
		.then(campuses => {
      this.setState({campuses})
    })
	}

	handleSubmit(event) {
		event.preventDefault();
		let inputValue = event.
		this.setState({inputValue})
	}

	render () {
		console.log('props!',this.props)
		console.log('state!',this.state)
		return (
			<div id="Students">
				<h1>Hello from AddStudent</h1>
				<form onSubmit={event=>this.handleSubmit(event)}>
        <fieldset>
          <div>
            <label>Name</label>
            <div>
              <input
                type="text"
                onChange={console.log('it changed!!!!!!')}
                value= {this.props.inputValue}
              />
            </div>
						<select name="Select Campus">
							<option value='' disabled selected>Select Campus</option>
					 		{this.state.campuses.map(campus => {return <option key={campus.id}>{campus.name}</option>})}
						</select>
          </div>
          <div>
            <div>
              <button type="submit">
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
			</div>
		)
	}
}
