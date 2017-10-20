import React, { Component } from 'react';
import axios from 'axios';

export default class Campus extends Component {
	constructor (props) {
		super(props);
		this.state = {
      students: [],
      campus: {}
    }
  this.deleteStudent = this.deleteStudent.bind(this);
	}

	componentDidMount () {
		axios.get('/api/campuses/'+ this.props.match.params.id)
    .then(res => {
      return res.data
    })
		.then(campus => {
      return this.setState({
        campus: campus,
        students: campus.users
      })
    })
  }

	deleteStudent(event, id) {
		event.preventDefault();
		axios.delete('/api/students/'+id)
		.then(()=>axios.get('/api/campuses/'+this.props.match.params.id))
			.then(res => res.data)
			.then(campus => {
        return this.setState({
          campus: campus,
        students: campus.users})
    })
	}

	render () {
    console.log('state:',this.state)
    console.log('props:',this.props)
    let campusName = this.state.campus.name
    let studentArr = this.state.students //an array of objects
    console.log('studentarr',studentArr)
		return (
      <div id="Campus">
        <h1>Hello from {campusName}</h1>
        <table className = 'campus-student-table'>
          <thead>
					  <tr>
						  <th>#</th>
  						<th>Name</th>
              <th>Delete</th>
	  				</tr>
		  		</thead>
          <tbody>
				  	{studentArr.map(studentObj =>
						  <tr key = {studentObj.id}>
							  <td>{studentObj.id}</td>
                <td>
                  <a href={'/students/'+studentObj.id}>{studentObj.name}
                  </a>
                </td>
                <td>
									<img src='/delete_img.png' onClick={(event) => this.deleteStudent(event, studentObj.id)}/>
								</td>
              </tr>
            )}
          </tbody>
        </table>
 			</div>
    )
	}
}
