import React, { Component } from 'react';
import Aquarium from '../assets/artkoi2.png'

class Signup extends Component {
    state = {}
    render() {
        return (<div>
             <img className="koifish__picture" src={Aquarium} alt=""></img>
             <form className="login-form">
                Sign Up
                <label className="login__input-field">
                    Email:
                   <input type='text' name='name' />
                </label>
                <label className="login__input-field">
                    Password
                   <input type='text' name='name' />
                </label>
                <label className="login__input-field">
                    Date of Birth
                   <input type='text' name='name' />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>);
    }
}

export default Signup;