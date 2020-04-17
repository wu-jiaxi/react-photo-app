import React, { Component } from 'react';
import Aquarium from '../assets/artkoi2.png'

class Signup extends Component {
    state = {}
    render() {
        return (<div>
             <img className="koifish__picture" src={Aquarium} alt=""></img>
        </div>);
    }
}

export default Signup;