import React, { Component } from 'react';
import './CSS/main.css';

class AuthedBase extends Component {
    componentDidMount() {
        if (this.props.pageTitle) {
            document.title = `${this.props.pageTitle}`;
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="/">Grouper</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/classes">Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main role="main" className="container">

                    <div className="starter-template">
                        {this.props.children}
                    </div>

                </main>

            </div>
        );
    }
}

export default AuthedBase;
