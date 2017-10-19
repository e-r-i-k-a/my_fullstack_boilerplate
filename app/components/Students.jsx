import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Students extends Component {
	constructor (props) {
		super(props);
		this.state = {
			students: [],
			// singleStudent : null
		};
		this.deleteStudent = this.deleteStudent.bind(this);
		this.fetchStudents = this.fetchStudents.bind(this);
		// this.showSingleStudent = this.showSingleStudent.bind(this)
	}

	fetchStudents() {
		// preventDefault();
		axios.get('/api/students')
			.then(res => res.data)
			.then(students => this.setState({students}))
	}

	componentDidMount () {
		// e.preventDefault();
		axios.get('/api/students')
		.then(res => res.data)
		.then(students => this.setState({students}))
		// this.fetchStudents();
	}

	// showSingleStudent(id){
	// 	axios.get(`students\${id}`)
	// 	.then(student => {
	// 		this.setState({singleStudent: student})
	// 	})
	// }

	deleteStudent(event, id) {
		event.preventDefault();
		axios.delete('/api/students/'+id)
		.then(()=>axios.get('/api/students'))
			.then(res => res.data)
			.then(students => this.setState({students}))
		// .then(this.fetchStudents())
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
							<th>Campus</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{
							users.map(student => (
								<tr key = {student.id}>
									{/* <td onClick={() => this.showSingleStudent(student.id)}>
										{student.id}
									</td> */}
									<td>{student.id}</td>
									<td>{student.name}</td>
									<td>{student.campus.name}</td>
									<td>
										{/* <img src='/delete_img.png' onClick={() => console.log('clickityclick')}/> */}
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
