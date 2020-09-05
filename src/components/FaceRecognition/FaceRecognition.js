import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='imagedisplay'>
            <div className='imagesize'>
            <img className='resize' alt='' src={ imageUrl }></img>
          </div>
        </div>
    );    
}

export default FaceRecognition;