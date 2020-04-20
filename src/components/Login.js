import React from 'react';
import Aquarium from '../assets/artkoi2.png'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        this.props.onRouteChange('home')
    }

    render() {
        return (<div>
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