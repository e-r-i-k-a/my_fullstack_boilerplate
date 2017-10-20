import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export default class EditStudent extends Component {
	constructor (props) {
		super(props);
		this.state = {
      campuses: [],
      campus: {},
      student: {},
      inputName: '',
      // inputNameDirty: false,
      inputEmail: '',
      // inputEmailDirty: false,
			selectedCampus: '',
			// selectedCampusId: null,
			// inputCampus: '',
			// inputImage: '/favicon.ico'
		};
		this.handleStudentSubmit = this.handleStudentSubmit.bind(this)
		this.handleNameInput = this.handleNameInput.bind(this)
		this.handleEmailInput = this.handleEmailInput.bind(this)
		// this.handleCampusInput = this.handleCampusInput.bind(this)
		// this.handleImageInput = this.handleImageInput.bind(this)
		this.captureDropDown = this.captureDropDown.bind(this)
		// this.handleCampusSubmit = this.handleCampusSubmit.bind(this)
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
    if (this.state.inputName && this.state.inputEmail) {
			axios.put('/api/students/' + this.props.match.params.id +'/edit', {
				inputName: this.state.inputName,
				inputEmail: this.state.inputEmail
		})}}
		// .then(() => {})
	// } else if (this.s)

	// 	.then(this.setState({
	// 		inputName: this.state.student.name,
	// 		inputEmail: this.state.student.email
	// 	})
	// )

		// .then(()=>{})
    // if (!this.state.inputEmail) {
    //   this.setState({
    //     inputEmail: this.state.student.email
    //   })
    // }
		// axios.put('/api/students/' + this.props.match.params.id +'/edit', {
    //   inputName: this.state.inputName,
    //   inputEmail: this.state.inputEmail
		// 	// email: this.state.inputEmail,
		// 	// campusId: Number(this.state.selectedCampusId)
    // })
    // .then(()=>{})
	// }

	// handleCampusSubmit(event) {
	// 	event.preventDefault();
	// 	axios.post('/api/campus', {
	// 		name: this.state.inputCampus,
	// 		image: this.state.inputImage,
	// 	})
	// }

	handleNameInput(event) {
		event.preventDefault();
		let inputName = event.target.value
		this.setState({
      inputName: inputName,
      // inputNameDirty: true
    })
	}

	// handleCampusInput(event) {
	// 	event.preventDefault();
	// 	let inputCampus = event.target.value
	// 	this.setState({inputCampus})
	// }

	handleEmailInput(event) {
		event.preventDefault();
		let inputEmail = event.target.value
		this.setState({
      inputEmail: inputEmail,
      // inputEmailDirty: true
    })
	}

	// handleImageInput(event) {
	// 	event.preventDefault();
	// 	let inputImage = event.target.value
	// 	this.setState({inputImage})
	// }

	captureDropDown(event) {
		event.preventDefault();
		let selectedDropDown = (event.target.value)
		let selectedCampusId = this.state.campuses.filter(function(campus){
			return campus.name === selectedDropDown
    })[0].id
    // let selectedCampusId = this.state.campuses.selectedDropDown.id
		this.setState({selectedCampus: selectedDropDown})
		this.setState({selectedCampusId})
	}

	render () {
		console.log('props!',this.props)
		console.log('state!',this.state)
		// console.log('this.state.student.name', this.state.student.name)

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
          {/* <div>
						<input
							type="text"
							onChange={this.handleImageInput}/>
					</div> */}
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
