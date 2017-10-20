import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {
	constructor (props) {
		super(props);
		this.state = {
      campuses: [],
      campus: {},
      student: {},
      inputName: '',
      inputEmail: '',
			selectedCampus: '',
			selectedCampusId: null,
		};
		this.handleStudentSubmit = this.handleStudentSubmit.bind(this)
		this.handleNameInput = this.handleNameInput.bind(this)
		this.handleEmailInput = this.handleEmailInput.bind(this)
		this.captureDropDown = this.captureDropDown.bind(this)
	}

	componentDidMount () {
    axios.get('/api/students/'+ this.props.match.params.id)
		.then(res => res.data)
		.then(student => this.setState({
      student: student,
      campus: student.campus}))
    .then(()=>axios.get('/api/campuses'))
    .then((res) => res.data)
    .then((campuses) => this.setState({campuses}))}

	handleStudentSubmit(event) {
    event.preventDefault();
			axios.put('/api/students/' + this.props.match.params.id +'/edit', {
				inputName: this.state.inputName || this.state.student.name,
				inputEmail: this.state.inputEmail || this.state.student.email,
				selectedCampusId: this.state.selectedCampusId || this.state.campus.id
			})
		}

	handleNameInput(event) {
		event.preventDefault();
		let inputName = event.target.value
		this.setState({
      inputName: inputName,
    })
	}

	handleEmailInput(event) {
		event.preventDefault();
		let inputEmail = event.target.value
		this.setState({
      inputEmail: inputEmail,
    })
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
		return (
		<div id = "EditStudent">
			<div id="EditStudentInfo">
				<h1>Hello from Edit Student: {this.state.student.name}</h1>
				<form onSubmit={event=>this.handleStudentSubmit(event)}>
        <fieldset>
          <div>
            <label>Name</label>
            <div>
              <input
                type="text"
                placeholder={this.state.student.name}
                onChange={this.handleNameInput}/>
            </div>
						<label>Email</label>
            <div>
              <input
                type="text"
                placeholder={this.state.student.email}
                onChange={this.handleEmailInput}/>
            </div>
						<select name="Change Campus" onChange={event=>this.captureDropDown(event)}>
							 {this.state.campuses.map(campus => {
							 if(campus.name === this.state.campus.name){
								 return <option selected key={campus.id}>{campus.name}</option>
							 } else {
								 return <option key={campus.id}>{campus.name}</option>}})}
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
	</div>)
	}
}
