import React, { Component } from 'react';
import Aquarium from '../assets/artkoi2.png'

class Signup extends Component {
    state = {

    }


    render() {
        return (<div>
            <img className="koifish__picture" src={Aquarium} alt=""></img>
            {/* making container box */}
            <div className="container">
                <form className="login-form">
                    Sign Up
                    <label className="login__input-field">
                        First Name:
                   <input type='text' name='first name' onChange={this.handleChange} />
                    </label>
                    <label className="login__input-field">
                        Last Name:
                   <input type='text' name='last name' onChange={this.handleChange} />
                    </label>
                    <label className="login__input-field">
                        Email:
                   <input type='text' name='email' placeholder="email" />
                    </label>
                    <label className="login__input-field">
                        Password:
                   <input type='text' name='password' placeholder="password" />
                    </label>
                    <label className="login__input-field">
                        Date of Birth:
                   <input type='text' name='birth' placeholder="birth" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        </div>);
    }
}

export default Signup;