import React from 'react';
import './MobileHeader.css';

const MobileHeader = ({ setMobileMenuIsOpened }) => {

    const openMobileMenu = () => setMobileMenuIsOpened(true);

    return (
        <div className='mobile-header-container'>
            <button className='button-open-mobile-menu' onClick={openMobileMenu}>
                <i className="fas fa-bars"></i>
            </button>
        </div>
    );

};

export default MobileHeader;

// Fix header on the top after scroll