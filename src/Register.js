import React, { Component } from 'react';
import Base from './Base';
import './CSS/login.css';

class Register extends Component {
    render() {
        return (
            <Base classes="text-center">
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Name" required autoFocus />
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <label htmlFor="inputCPassword" className="sr-only">Confirm Password</label>
                    <input type="password" id="inputCPassword" className="form-control" placeholder="Confirm Password" required />

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </Base>
        );
    }
}

export default Register;
