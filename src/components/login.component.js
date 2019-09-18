import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../stylesheets/register-login.css';

export default class Login extends Component {
    render() {
        return (
            <div id="viewport">
                <div id="register-login-container">
                    <form id="register-login-form">
                        <div className="form-group">
                            <label>Student Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">Your email must end in .edu</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <button type="button" className="btn btn-link">Dont have an account?</button>
                    </form>
                </div>
            </div>
        );
    }
}