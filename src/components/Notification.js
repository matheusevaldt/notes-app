import React from 'react';
import '../Notification.css';

const Notification = ({ notificationMessage, setNotificationIsOpened }) => {

    const handleCloseNotification = () => {
        setNotificationIsOpened(false);
    };

    return (
        <div className='notification-container'>
            <h1>Attention!</h1>
            <p>{notificationMessage}</p>
            <button onClick={handleCloseNotification}>OK</button>
        </div>
    );

};


export default Notification;