import React from 'react';

const Navigation = (onRouteChange) => {
    return (
        <nav>
            <p><a href="" onClick={() => onRouteChange('Signin')}>Sign out</a></p>
        </nav>
    );
}

export default Navigation;