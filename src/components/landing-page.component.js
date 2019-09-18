import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {  // TODO add logo, app info, background img...
  constructor(props) {
      super(props);

      this.state = {

      }
  }

    render() {
        return (
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/login" className="nav-link" >Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link" >Register</Link>
            </li>
          </ul>
        );
    }
}
