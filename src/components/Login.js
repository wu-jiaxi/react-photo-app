import React, { Component } from 'react';
import Aquarium from '../assets/artkoi2.png'
import { Link } from 'react-router-dom'

class Login extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    
    render() {
        return (<div>
            <img className="koifish__picture" src={Aquarium} alt=""></img>
            <form onSubmit={this.handleSubmit}  className="login-form" >
                Sign In
                <label className="login__input-field">
                    Email:
                   <input type='text' name='email' onChange={this.handleChange} />
                </label>
                <label className="login__input-field">
                    Password:
                   <input type='text' name='password' onChange={this.handleChange} />
                </label>
                <label className="login__input-field">
                   First Name:
                   <input type='text' name='first name' onChange={this.handleChange} />
                </label>
                <label className="login__input-field">
                    Email:
                   <input type='text' name='last name' onChange={this.handleChange} />
                </label>
                <Link to='/signup'>
                    New here?
                </Link>
                <button> Login </button>
            </form>
        </div>);
    }
}

export default Login;