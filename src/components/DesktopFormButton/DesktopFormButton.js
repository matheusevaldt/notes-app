import React from 'react';
import './DesktopFormButton.css';

const DesktopFormButton = ({ setFormIsOpened }) => {

    return (
        <div className='desktop-form-button-container'>
            <button onClick={() => setFormIsOpened(true)}>ADD A NEW NOTE</button>
        </div>
    );

};

export default DesktopFormButton;