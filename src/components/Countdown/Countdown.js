import React, { useState, useEffect } from 'react';

export default function Countdown({ seconds, setTestTimeLeft }) {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const convertHMS = (value) => {
        const sec = parseInt(value, 10);
        let minutes = Math.floor(sec / 60);
        let seconds = sec - (minutes * 60);
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return minutes+':'+seconds;
    }

    useEffect(() => {
        if (!timeLeft) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    return (
        <div>
            <h1>{convertHMS(timeLeft)}</h1>
        </div>
    );


};