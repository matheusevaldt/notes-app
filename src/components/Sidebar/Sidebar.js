import React, { useEffect, useState } from 'react';
import './Sidebar.css';

import { getGreetingBasedOnTimeOfTheDay, getImageBasedOnTimeOfTheDay, getCurrentDate, getCurrentTime } from '../../Utils';

const Sidebar = ({ amountOfNotes }) => {

    const [desktopGreeting, setDesktopGreeting] = useState(getGreetingBasedOnTimeOfTheDay);
    const [desktopImage, setDesktopImage] = useState(getImageBasedOnTimeOfTheDay);
    const [desktopCurrentDate, setDesktopCurrentDate] = useState(getCurrentDate);
    const [desktopCurrentTime, setDesktopCurrentTime] = useState(getCurrentTime);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            setDesktopCurrentTime(getCurrentTime);
            if (minutes === 0 && seconds === 0) setDesktopGreeting(getGreetingBasedOnTimeOfTheDay);
            if (minutes === 0 && seconds === 0) setDesktopImage(getImageBasedOnTimeOfTheDay);
            if (hours === 0 && minutes === 0 && seconds === 0) setDesktopCurrentDate(getCurrentDate);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div className='sidebar-container'>
            <header className='sidebar-header' style={{ backgroundImage: `url(${desktopImage})` }}></header>
            <div className='sidebar-information'>
                <h1>Notes App</h1>
                <h2>{desktopGreeting}</h2>
                <div className='sidebar-date'>
                    <p>{desktopCurrentDate}</p>
                    <div id='sidebar-circle'></div>
                    <p>{desktopCurrentTime}</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;