import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br3 shadow-2 tilt" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner logo"><img alt='logo' src={brain}></img> </div>
        </Tilt>
        </div>
    );
}

export default Logo;