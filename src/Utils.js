import sunriseImage from './assets/images/sunrise.jpg';
import daytimeImage from './assets/images/daytime.jpg';
import sunsetImage from './assets/images/sunset.jpg';
import nighttimeImage from './assets/images/nighttime.jpg';

let date, hours, minutes;

setInterval(() => {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
}, 1000);

export const getImageBasedOnTimeOfTheDay = () => {
    if (hours === 6) {
        return sunriseImage;
    } else if ((hours >= 7) && (hours <= 16 && minutes <= 59)) {
        return daytimeImage;
    } else if (hours === 17) {
        return sunsetImage;
    } else {
        return nighttimeImage;
    }
};

// export const getImageBasedOnTimeOfTheDay = () => {
//     if (minutes === 25) {
//         return sunriseImage;
//     } else {
//         return nighttimeImage;
//     }
// };

export const getGreetingBasedOnTimeOfTheDay = () => {
    if ((hours >= 6) && (hours <= 11 && minutes <= 59)) {
        return 'Good morning!';
    } else if ((hours >= 12) && (hours <= 16 && minutes <= 59)) {
        return 'Good afternoon!';
    } else {
        return 'Good evening!';
    }
};

export const getCurrentDate = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-GB', options);
    return currentDate;
};

export const getCurrentTime = () => {
    const options = { hour: '2-digit', minute: '2-digit' };
    const currentTime = new Date().toLocaleTimeString([], options);
    return currentTime;
};