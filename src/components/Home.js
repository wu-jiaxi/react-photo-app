import React, { Component } from 'react';
import Aquarium from '../assets/koifish.jpg'

class Home extends Component {
    state = {}
    render() {
        return (<div>
            <img className="koifish__picture" src={Aquarium} alt="" width="1440px"></img>
            <h1 className="koifish__text"> Welcome to Striking Fish Photos! </h1>
            <h2 className="koifish__text"> Here at Striking Fish Photos, we are dedicated to showing the internet the beauty of under water aquatics, and the tranquility of aquamarine life</h2>
        </div>);
    }
}

export default Home;