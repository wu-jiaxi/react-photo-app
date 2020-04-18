import React, { Component } from 'react';
import Aquarium from '../assets/artkoi2.png'
import { Link } from 'react-router-dom'
import fire from '../components/fire'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        console.log("helloooo")
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
                    Password
                   <input type='text' name='password' onChange={this.handleChange} />
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