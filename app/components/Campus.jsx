import React, { Component } from 'react';
import axios from 'axios';

export default class Campus extends Component {
	constructor (props) {
		super(props);
		this.state = {
      students: [],
      campus: {}
		};
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
	  				</tr>
		  		</thead>
          <tbody>
            {console.log(studentArr)}
				  	{studentArr.map(studentObj =>
						  <tr key = {studentObj.id}>
							  <td>{studentObj.id}</td>
								<td>{studentObj.name}</td>
              </tr>
            )}
          </tbody>
        </table>
 			</div>
    )
	}
}
