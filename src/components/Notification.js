import React, { Component } from 'react';
import '../Notification.css';

// const Notification = ({ notificationMessage, setNotificationIsOpened }) => {
class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notification: 'false'
        };
    }

    // console.log(notificationMessage);

    handleCloseNotification = () => {
        this.setState({
            notification: 'true'
        });
        // setNotificationIsOpened(false);
    };

    render() {
        return (
            <div className='notification-container'>
                <h1>Attention!</h1>
                <p>{this.state.notification}</p>
                <button onClick={this.handleCloseNotification}>OK</button>
            </div>
        );
    }

}
// };

export default Notification;