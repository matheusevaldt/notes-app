import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../Sidebar.css';

const Sidebar = ({ amountOfNotes }) => {

    const handleSidebarTime = () => {
        const options = { hour: '2-digit', minute: '2-digit' };
        const sidebarTime = (
            <p>
                {new Date().toLocaleTimeString([], options)}
            </p>
        );
        ReactDOM.render(sidebarTime, document.getElementById('time'));
    };

    const handleSidebarDate = () => {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const sidebarDate = (
            <p>
                {new Date().toLocaleDateString('en-GB', options)}
            </p>
        );
        ReactDOM.render(sidebarDate, document.getElementById('date'));
    };

    const handleSidebarGreetings = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        if ((hours >= 6) && (hours <= 11 && minutes <= 59)) {
            ReactDOM.render('Good morning!', document.getElementById('greetings'));
        } else if ((hours >= 12) && (hours <= 16 && minutes <= 59)) {
            ReactDOM.render('Good afternoon!', document.getElementById('greetings'));
        } else {
            ReactDOM.render('Good evening!', document.getElementById('greetings'));
        }
    };

    setInterval(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        if (hours === 0 && minutes === 0 && seconds === 0) handleSidebarDate();
        if (minutes === 0 && seconds === 0) handleSidebarGreetings();
    }, 1000);

    setInterval(handleSidebarTime, 1000);

    useEffect(() => {
        handleSidebarTime();
        handleSidebarDate();
        handleSidebarGreetings();
    }, []);
    
    return (
        <aside className='sidebar-container'>
            <h1>Notes App</h1>
            <div id='greetings'></div>
            <div className='date-time'>
                <div id='date'></div>
                <div id='circle'></div>
                <div id='time'></div>
            </div>
            <div id='sidebar-hr'></div>
            <div id='amount-of-notes'>Notes added: {amountOfNotes}</div>
        </aside>
    );
};

export default Sidebar;