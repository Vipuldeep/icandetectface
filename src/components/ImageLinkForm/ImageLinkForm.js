import React from 'react';

const ImageLinkForm = () => {
    return (
        <div>
            <p>
                This software is capable of detecting the faces from the images you upload! 
            </p>
            <div className='center br3 shadow-2 pa4'>
                <input type='text' placeholder="Paste your URL here"></input>
                <button className='buttonid'>Detect</button>
            </div>
        </div>
    );    
}

export default ImageLinkForm;