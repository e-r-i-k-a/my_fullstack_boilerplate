import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Student extends Component {
	constructor (props) {
		super(props);
		this.state = {
      student: {},
      campus: {}
    }
  this.deleteStudent = this.deleteStudent.bind(this);
	}

	componentDidMount () {
		axios.get('/api/students/'+ this.props.match.params.id)
		.then(res => res.data)
		.then(student => this.setState({
      student: student,
      campus: student.campus})
    )}

    deleteStudent(event, id) {
		event.preventDefault();
		axios.delete('/api/students/'+id)
    // .then(()=> 'Student deleted.')
    .then(()=>this.setState({student: undefined}))
  }

	render () {
    console.log('state:',this.state)
    console.log('props:',this.props)
    console.log('this.state.student', this.state.student)
    if (this.state.student) {
      return (
        <div id="Student">
          <h1>Hello from Student</h1>
          <table className = 'single-student-table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Campus</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{this.state.student.id}</td>
                  <td>{this.state.student.name}</td>
                  <td>{this.state.student.email}</td>
                  {<td>
                    <a href={'/campus/'+ this.state.campus.id}>{this.state.campus.name}</a>
                  </td>}
                  <td>
                    <img src='/delete_img.png' onClick={(event) => this.deleteStudent(event, this.state.student.id)}/>
                  </td>
                  <td>
                    <Link to = {'/students/'+ this.state.student.id +'/edit'}>
					            {<img src='/favicon.ico' width='25' height='25'/>}
				            </Link>
                  </td>
                </tr>
            </tbody>
          </table>
         </div>
      )
    } else {
      return <h1>Hello from Student</h1>
    }
	}
}
