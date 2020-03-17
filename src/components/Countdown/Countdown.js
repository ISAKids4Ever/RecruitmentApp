import React, { useState, useEffect } from 'react';

export default function Countdown({ seconds, setTestTimeLeft }) {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        if (!timeLeft) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    setTestTimeLeft(timeLeft);
    return (
        <div>
            <h1>{timeLeft}</h1>
        </div>
    );


};