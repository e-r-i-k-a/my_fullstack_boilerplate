import React, { Component } from 'react';
import Home from './Home';
import Students from './Students';

const onClickStudents = () => {}

const NavBar = (props) => {
  return (
		<div id="NavBar">
        <button
          id="Home-btn"
          /* onClick = {()=><Home/>} */
        >Home</button>
        <button
          id="Students-btn"
          /* onClick = {()=><Students/>} */
        >Students</button>
        <hr/>
    </div>
	)
}

export default NavBar
