import React, { Component } from 'react';
import Home from './Home';
import Students from './Students';
import {Link} from 'react-router-dom';

const onClickStudents = () => {}

const NavBar = (props) => {
  return (
		<div id="NavBar">
      <Link to = {'/home'}>
        <button id="Home-btn">Home</button>
      </Link>
      <Link to = {'/students'}>
        <button id="Students-btn">Students</button>
      </Link>
      <hr/>
    </div>
	)
}

export default NavBar
