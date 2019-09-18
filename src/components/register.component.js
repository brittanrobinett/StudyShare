import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../stylesheets/register-login.css';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        console.log(user);
        // window.location = '/dashboard';
    }

    render() {
        return (
            <div id="viewport">
                <div id="register-login-container">
                    <form id="register-login-form" onSubmit={this.onSubmit}>
                        {/* Name Row */}
                        <div className="form-row mb-3">
                            <div className="col">
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder="First name" value={this.state.firstName} onChange={this.onChangeFirstName} />
                            </div>
                            <div className="col">
                                <label>Last Name</label>
                                <input type="text" className="form-control" placeholder="Last name" value={this.state.lastName} onChange={this.onChangeLastName} />
                            </div>
                        </div>
                        {/* Email & Password Inputs */}
                        <div className="form-group">
                            <label>Student Email</label>
                            <input type="email" className="form-control"
                                placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail} />
                            <small className="form-text text-muted">Your email must end in .edu</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-link">Already have an account?</button>
                    </form>
                </div>
            </div>
        );
    }
}