import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Students extends Component {
	constructor (props) {
		super(props);
		this.state = {
			students: [],
			// singleStudent : null
		};
		// this.showSingleStudent = this.showSingleStudent.bind(this)
	}

	componentDidMount () {
		axios.get('api/students')
		.then(res => res.data)
		.then(students => this.setState({students}))
	}

	// showSingleStudent(id){
	// 	axios.get(`students\${id}`)
	// 	.then(student => {
	// 		this.setState({singleStudent: student})
	// 	})
	// }

	render () {

		const users = this.state.students;

		return (
			<div id="Students">
				<h1>Hello from 'Students'</h1>
				{/* {this.singleStudent ? <Student student={this.singleStudent} : */}
				<table className = 'student-table'>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Campus</th>
						</tr>
					</thead>
					<tbody>
						{
							users.map(student => (
								<tr key = {student.id}>
									{/* <td onClick={() => this.showSingleStudent(student.id)}>{student.id}</td> */}
									<td>{student.id}</td>
									<td>{student.name}</td>
									<td>{student.campusId}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		)
	}
}
