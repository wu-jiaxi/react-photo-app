import React, { Component } from 'react';
import Aquarium from '../assets/artkoi2.png'
import { Link } from 'react-router-dom'

const Login = ({ onRouteChange }) => {
    return (<div>
        <img className="koifish__picture" src={Aquarium} alt=""></img>
        <form className="login-form" >
            Sign In
            <label className="login__input-field">
                Email:
               <input type='text' name='email' />
            </label>
            <label className="login__input-field">
                Password:
               <input type='text' name='password' />
            </label>
            <Link to='/signup'>
                New here?
            </Link>
            <button onClick={onRouteChange}> Login </button>
        </form>
    </div>);
}




export default Login;