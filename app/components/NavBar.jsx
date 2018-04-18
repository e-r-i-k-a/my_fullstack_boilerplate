import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <nav>
          <Link to={'/home'}>
            <button>Home</button>
          </Link>
          <Link to={'/articles'}>
            <button>Articles</button>
          </Link>
        </nav>
      </div>
    )
  }
}
