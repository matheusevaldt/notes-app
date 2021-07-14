import React from 'react';
import './MobileFormButton.css';

const MobileFormButton = ({ setFormIsOpened }) => {

    return (
        <div className='mobile-form-button-container'>
            <button onClick={() => setFormIsOpened(true)}><i className="fas fa-feather-alt"></i></button>
        </div>
    );

};

export default MobileFormButton;