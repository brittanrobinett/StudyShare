import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component { // TODO redirect if token is not authenticated
  constructor(props) {
      super(props);

      this.state = {
        firstName: ''
      }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/dashboard')
      .then(res => {
        const user = res.data; // FIX: not able to access data from user
        this.setState({
          firstName: user.firstName // FIX: not able to access data from user
        })
        console.log(user.firstName); // FIX: not able to access data from user
      })
      .catch((err) => {

      });
  }

  render() {
      return (
          <h1>hi {this.state.firstName} </h1> // FIX not able to display user data
      );
  }
}
