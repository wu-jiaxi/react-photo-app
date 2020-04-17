import React, { Component } from 'react';
import Aquarium from '../assets/koifish.jpg'

class Login extends Component {
    state = {}
    render() {
        return (<div>
            <img className="koifish__picture" src={Aquarium} alt=""></img>
        </div>);
    }
}

export default Login;