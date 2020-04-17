import React, { Component } from 'react';

class Navbar extends Component {
    state = {}
    render() {
        return (<div>
            <div className="navbar-container">
                <ul class="navbar">
                    <li className="navbar__list">Home</li>
                    <li className="navbar__list">About</li>
                    <li className="navbar__list">Pictures</li>
                    <li className="navbar__list">Favorites</li>
                    <li className="navbar__list">Settings</li>
                </ul>
            </div>
        </div>);
    }
}

export default Navbar;