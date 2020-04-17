import React, { Component } from 'react';
import Aquarium from '../assets/artkoi2.png'

class Login extends Component {
    state = {}
    render() {
        return (<div>
            <img className="koifish__picture" src={Aquarium} alt=""></img>
            <form className="login-form">
                Sign In
                <label className="login__input-field">
                    Email:
                   <input type='text' name='name' />
                </label>
                <label className="login__input-field">
                    Password
                   <input type='text' name='name' />
                </label>
                New here?
                <input type="submit" value="Submit" />
            </form>
        </div>);
    }
}

export default Login;