import React from 'react';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div>
            <p>
                This software is capable of detecting the faces from the images you upload! 
            </p>
            <div className='center br3 shadow-2 pa4'>
                <input type='text' placeholder="Paste your URL here" onChange={onInputChange}></input>
                <button className='buttonid' onClick={onSubmit}>Detect</button>
            </div>
        </div>
    );    
}

export default ImageLinkForm;