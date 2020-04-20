// Create a Navbar component

// importing react component
import React from 'react';
//importing link
import { Link } from 'react-router-dom'


function Navbar({ onRouteChange}) {

    const navStyle = {
        color: 'white',
    }


    return (
        <div className="navbar-container">
            <ul className="navbar">
                {/* list items used as links to different pages */}
                <Link to='/' style={navStyle}>
                    <li className="navbar__list">Home</li>
                </Link>
                <Link to='/pictures' style={navStyle}>
                    <li className="navbar__list">Pictures</li>
                </Link>
                <Link to='/favorites' style={navStyle}>
                    <li className="navbar__list">Favorites</li>
                </Link>
                <Link to='/login' style={navStyle}>
                    <li className="navbar__list">Login</li>
                </Link>
                <Link to='/settings' style={navStyle}>
                    <li className="navbar__list">Settings</li>
                </Link>
                
            </ul>
        </div>
    )
}

export default Navbar;