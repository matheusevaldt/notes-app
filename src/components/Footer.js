import React from 'react';
import '../Footer.css';

const Footer = ({ formIsOpened, setFormIsOpened }) => {

    const handleOpenForm = () => {
        setFormIsOpened(true);
        console.log(formIsOpened);
    };

    return (
        <div className='container-footer'>
            <button onClick={handleOpenForm} className='button-open-form'><i className="fas fa-feather-alt"></i></button>
        </div>
    );
}

export default Footer;