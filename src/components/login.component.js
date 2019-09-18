import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/register-login.css';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
      super(props);

      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          email: '',
          password: ''
      }
  }

  onChangeEmail(e) {
      this.setState({
          email: e.target.value
      });
  }

  onChangePassword(e) {
      this.setState({
          password: e.target.value
      });
  }

  onSubmit(e) {
      e.preventDefault();
      const user = {
          email: this.state.email,
          password: this.state.password
      }
      console.log(user);
      axios.post('http://localhost:5000/login', user)
        .then(res => console.log(res.data))
        .catch(res => console.log(res.data));
  }

    render() {
        return (
            <div id="viewport">
                <div id="register-login-container">
                    <form id="register-login-form" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Student Email</label>
                            <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail}
                                placeholder="Enter email" />
                            <small className="form-text text-muted">Your email must end in .edu</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <Link to="/register" className="btn btn-link">Dont have an account?</Link>
                    </form>
                </div>
            </div>
        );
    }
}
