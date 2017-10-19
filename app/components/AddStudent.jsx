import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export default class AddStudent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			campuses: [],
			inputValue: '',
			selectedCampus: '',
			selectedCampusId: null
		};
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInput = this.handleInput.bind(this)
		this.captureDropDown = this.captureDropDown.bind(this)
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
		axios.post('/api/students', {
			name: this.state.inputValue,
			campusId: Number(this.state.selectedCampusId)
		})
		// .then(res => res.data)
		// .then(campuses => {
		// 	this.setState({campuses})
		// })
	}

	handleInput(event) {
		event.preventDefault();
		let inputValue = event.target.value
		this.setState({inputValue})
	}

	captureDropDown(event) {
		event.preventDefault();
		let selectedDropDown = (event.target.value)
		let selectedCampusId = this.state.campuses.filter(function(campus){
			return campus.name === selectedDropDown
		})[0].id
		this.setState({selectedCampus: selectedDropDown})
		this.setState({selectedCampusId})
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
                onChange={this.handleInput}
              />
            </div>
						<select name="Select Campus" onChange={event=>this.captureDropDown(event)}>
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
