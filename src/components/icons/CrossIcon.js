import React from 'react';

const SaveIcon = ({ className = 'flashcardIcon' }) => (
    <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 237.8">
            <line
                x1="106.2"
                y1="89.2"
                x2="140.7"
                y2="124.5"
                fill="none"
                stroke="#e6e6e6"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="6"
            />
            <line
                x1="141.5"
                y1="89.2"
                x2="106.2"
                y2="124.5"
                fill="none"
                stroke="#e6e6e6"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="6"
            />
        </svg>
    </div>
);

export default SaveIcon;
