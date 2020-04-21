// login component that handles state for email and passowrd then on submit button check if password is a match and return data

import React from 'react';
import Aquarium from '../assets/artkoi2.png'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            // state for email
            signInEmail: '',
            // state for password
            signInPassword: ''
        }
    }

    // function allows user input from keyboard for email box
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    // function allows user input from keyboard for password box
    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    // function allows user input from submit button for submit
    onSubmitSignIn = () => {
        //get route to login from server
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            // when data for email and password matches return success, if success is return go to route 'home'
            .then(response => response.json())
            .then(data => {
                if (data === 'success') {
                    this.props.onRouteChange('home');
                }
            })
    }
    // return form for sign in with email and password input field
    render() {
        return (<div>
            {/* import pictures from aquarium component */}
            <img className="koifish__picture" src={Aquarium} alt=""></img>
            <form className="login-form" >
                Sign In
                <label className="login__input-field">
                    Email:
                   <input onChange={this.onEmailChange} type='text' name='email' />
                </label>
                <label className="login__input-field">
                    Password:
                   <input onChange={this.onPasswordChange} type='text' name='password' />
                </label>
                <Link to='/signup'>
                    New here?
                </Link>
                <button onClick={this.onSubmitSignIn}> Login </button>
            </form>
        </div>);
    }

}




export default Login;