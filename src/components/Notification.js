import React from 'react';
import '../Notification.css';

const Notification = ({ notificationMessage }) => {

    console.log(notificationMessage);

    return (
        <div className='notification-container'>
            <h1>{notificationMessage}</h1>
        </div>
    );
};

export default Notification;