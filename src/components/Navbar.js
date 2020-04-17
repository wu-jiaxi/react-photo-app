// Create a Navbar component

// importing react component
import React, { Component } from 'react';
//importing link
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = {}
    render() {
        return (<div>
            <div className="navbar-container">
                <ul class="navbar">
                    {/* list items used as links to different pages */}
                    <Link to='/home'>
                        <li className="navbar__list">Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className="navbar__list">About</li>
                    </Link>
                    <Link to='/pictures'>
                        <li className="navbar__list">Pictures</li>
                    </Link>
                    <Link to='/favorites'>
                        <li className="navbar__list">Favorites</li>
                    </Link>
                    <Link to='/settings'>
                        <li className="navbar__list">Settings</li>
                    </Link>
                </ul>
            </div>
        </div>);
    }
}

export default Navbar;