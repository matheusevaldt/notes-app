import React, { useEffect, useState } from 'react';
import './MobileMenu.css';

import { getGreetingBasedOnTimeOfTheDay, getImageBasedOnTimeOfTheDay, getCurrentDate, getCurrentTime } from '../../Utils';

const MobileMenu = ({ setMobileMenuIsOpened, amountOfNotes }) => {

    const [mobileGreeting, setMobileGreeting] = useState(getGreetingBasedOnTimeOfTheDay);
    const [mobileImage, setMobileImage] = useState(getImageBasedOnTimeOfTheDay);
    const [mobileCurrentDate, setMobileCurrentDate] = useState(getCurrentDate);
    const [mobileCurrentTime, setMobileCurrentTime] = useState(getCurrentTime);

    const closeMobileMenu = () => setMobileMenuIsOpened(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            if (minutes === 0 && seconds === 0) {
                setMobileImage(getImageBasedOnTimeOfTheDay);
                console.log('UPDATE IMAGE');
            }
            if (minutes === 0 && seconds === 0) {
                setMobileGreeting(getGreetingBasedOnTimeOfTheDay);
                console.log('UPDATE GREETING');
            }
            if (hours === 0 && minutes === 0 && seconds === 0) {
                setMobileCurrentDate(getCurrentDate);
                console.log('UPDATE CURRENT DATE');
            }
            setMobileCurrentTime(getCurrentTime);
            console.log('UPDATE CURRENT TIME');
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div className='mobile-menu-container'>
            <div className='mobile-menu-visible'>
                <header className='mobile-menu-header' style={{ backgroundImage: `url(${mobileImage})` }}></header>
                <div className='mobile-menu-info'>
                    <h1>{mobileGreeting}</h1>
                    <div className='mobile-date'>
                        <p>{mobileCurrentDate}</p>
                        <div id='mobile-circle'></div>
                        <p>{mobileCurrentTime}</p>
                    </div>
                    <div id='mobile-hr'></div>
                    <p id='mobile-notes-added'>Notes added: {amountOfNotes}</p>
                </div>
                <button className='button-close-mobile-menu' onClick={closeMobileMenu}>CLOSE MENU</button>
            </div>
            <div className='mobile-menu-invisible' onClick={closeMobileMenu}></div>
        </div>
    );

};

export default MobileMenu;