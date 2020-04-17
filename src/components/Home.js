import React, { Component } from 'react';
import Aquarium from '../assets/koifish.jpg'

class Home extends Component {
    state = {}
    render() {
        return (<div>
            <img className="koifish__picture" src={Aquarium} alt="" width="1440px"></img>
            <div className="koifish__text">
            <h1> Welcome to Striking Fish Photos! </h1>
            <h2> Here at Striking Fish Photos, we are dedicated </h2>
            <h2> to showing the beauty of underwater aquatics, </h2>
            <h2>and the tranquility of aquamarine life</h2>
            </div>
        </div>);
    }
}

export default Home;