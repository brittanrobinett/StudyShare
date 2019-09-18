import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component { // TODO redirect if token is not authenticated
  constructor(props) {
      super(props);

      this.state = {

      }
  }

  //componentDidMount() {
//    axios.get('http://localhost:5000/dashboard')
  //    .then(res => {
  //      const user = res;
  //    })
  //    .catch((err) => {
//
  //    });
//  }

  render() {
      return (
          <h1>This is where you see messages</h1>
      );
  }
}
