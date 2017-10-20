import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Students extends Component {
	constructor (props) {
		super(props);
		this.state = {
			students: [],
		};
		this.deleteStudent = this.deleteStudent.bind(this);
	}

	// fetchStudents() {
	// 	// preventDefault();
	// 	axios.get('/api/students')
	// 		.then(res => res.data)
	// 		.then(students => this.setState({students}))
	// }

	componentDidMount () {
		axios.get('/api/students')
		.then(res => res.data)
		.then(students => this.setState({students}))
	}

	deleteStudent(event, id) {
		event.preventDefault();
		axios.delete('/api/students/'+id)
		.then(()=>axios.get('/api/students'))
			.then(res => res.data)
			.then(students => this.setState({students}))
	}

	render () {

		const users = this.state.students;

		return (
			<div id="Students">
				<h1>Hello from Students</h1>
				{/* {this.singleStudent ? <Student student={this.singleStudent} : */}
				<Link to = {'/student/new'}>
					{<img src='/add_student_button.png'/>}
				</Link>
				<table className = 'student-table'>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Campus</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{
							users.map(student => (
								<tr key = {student.id}>
									<td>{student.id}</td>
									<td>
										<a href={'/students/'+ student.id}>{student.name}</a>
									</td>
									<td>{student.email}</td>
									<td>{student.campus.name}</td>
									<td>
										<img src='/delete_img.png' onClick={(event) => this.deleteStudent(event, student.id)}/>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		)
	}
}
