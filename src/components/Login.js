import React, { Component } from 'react';
import Aquarium from '../assets/artkoi2.png'
import { Link } from 'react-router-dom'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(e)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (<div>
            <img className="koifish__picture" src={Aquarium} alt=""></img>
            <form className="login-form">
                Sign In
                <label className="login__input-field">
                    Email:
                   <input type='text' name='name' onChange={this.handleChange} />
                </label>
                <label className="login__input-field">
                    Password
                   <input type='text' name='password' onChange={this.handleChange} />
                </label>
                <Link to='/signup'>
                    New here?
                </Link>
                <input type="submit" value="Submit" onChange={this.handleSubmit} />
            </form>
        </div>);
    }
}

export default Login;