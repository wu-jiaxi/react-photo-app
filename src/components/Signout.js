import React from 'react';

const Signout = ({ onRouteChange }) => {
    return(
        <nav>
            <p onClick={() => onRouteChange('login')}> Sign out </p>
        </nav>
    )
}

export default Signout;