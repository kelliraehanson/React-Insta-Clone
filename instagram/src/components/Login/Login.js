import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: '',
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    rener() {
        return (
            <div className="loginForm">
            <h2>Instagram</h2>
            <p>Login here</p>

            <div>
                <input type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange} />
            </div>

            <div>
                <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange} />
            

            <button onClick={this.handleLoginSubmit}>
            Log In
            </button>
            </div>
            
            </div>
        );
    }
}

export default Login;