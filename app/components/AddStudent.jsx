import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export default class AddStudent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			campuses: [],
			inputName: '',
			inputEmail: '',
			selectedCampus: '',
			selectedCampusId: null,
			inputCampus: '',
			inputImage: '/favicon.ico'
		};
		this.handleStudentSubmit = this.handleStudentSubmit.bind(this)
		this.handleNameInput = this.handleNameInput.bind(this)
		this.handleEmailInput = this.handleEmailInput.bind(this)
		this.handleCampusInput = this.handleCampusInput.bind(this)
		this.handleImageInput = this.handleImageInput.bind(this)
		this.captureDropDown = this.captureDropDown.bind(this)
		this.handleCampusSubmit = this.handleCampusSubmit.bind(this)
	}

	componentDidMount () {
		axios.get('/api/campuses/')
		.then(res => res.data)
		.then(campuses => {
      this.setState({campuses})
		})
	}

	handleStudentSubmit(event) {
		event.preventDefault();
		axios.post('/api/students', {
			name: this.state.inputName,
			email: this.state.inputEmail,
			campusId: Number(this.state.selectedCampusId)
		})
	}

	handleCampusSubmit(event) {
		event.preventDefault();
		axios.post('/api/campus', {
			name: this.state.inputCampus,
			image: this.state.inputImage,
		})
	}

	handleNameInput(event) {
		event.preventDefault();
		let inputName = event.target.value
		this.setState({inputName})
	}

	handleCampusInput(event) {
		event.preventDefault();
		let inputCampus = event.target.value
		this.setState({inputCampus})
	}

	handleEmailInput(event) {
		event.preventDefault();
		let inputEmail = event.target.value
		this.setState({inputEmail})
	}

	handleImageInput(event) {
		event.preventDefault();
		let inputImage = event.target.value
		this.setState({inputImage})
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
		<div id = "AddForms">
			<div id="Students">
				<h1>Hello from AddStudent</h1>
				<form onSubmit={event=>this.handleStudentSubmit(event)}>
        <fieldset>
          <div>
            <label>Name</label>
            <div>
              <input
                type="text"
                onChange={this.handleNameInput}/>
            </div>
						<label>Email</label>
            <div>
              <input
                type="text"
                onChange={this.handleEmailInput}/>
            </div>
						<select name="Select Campus" onChange={event=>this.captureDropDown(event)}>
							<option value='' disabled selected>Select Campus</option>
							 {this.state.campuses.map(campus => {return <option key={campus.id}>{campus.name}</option>})}
						</select>
          </div>
          <div>
            <button type="submit">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
			</div>
		<div id="Campuses">
			<h1>Hello from AddCampus</h1>
			<form onSubmit={event=>this.handleCampusSubmit(event)}>
			<fieldset>
				<div>
					<label>Campus Name</label>
					<div>
						<input
							type="text"
							onChange={this.handleCampusInput}/>
					</div>
					<label>Image URL</label>
					<div>
						<input
							type="text"
							onChange={this.handleImageInput}/>
					</div>
				</div>
				<div>
					<button type="submit">
						Submit
					</button>
				</div>
			</fieldset>
		</form>
		</div>
	</div>)
	}
}
