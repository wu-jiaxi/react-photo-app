import React, { Component } from 'react';
import Aquarium from '../assets/artkoi2.png'

class Signup extends Component {
<<<<<<< HEAD
    state = {

    }

    handleChange = (e) => {
        console.log(e);
    }

    handleSubmit = (e) => {
        console.log(e);
    }

    render() {
        return (<div>
            <img className="koifish__picture" src={Aquarium} alt=""></img>
            {/* making container box */}
            <div className="container">
                <form className="login-form">
                    Sign Up
                <label className="login__input-field">
                        Email:
                   <input type='text' name='email' placeholder="email" onChange={this.handleChange} />
                    </label>
                    <label className="login__input-field">
                        Password
                   <input type='text' name='password' placeholder="password" onChange={this.handleChange} />
                    </label>
                    <label className="login__input-field">
                        Date of Birth
                   <input type='text' name='birth' placeholder="birth" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
                </form>
            </div>

        </div>);
    }
}

export default Signup;