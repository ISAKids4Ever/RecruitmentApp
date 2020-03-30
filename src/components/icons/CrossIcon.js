import React from 'react';

const SaveIcon = ({ className }) => (
    <svg className={className}>
        <line
            x1="1.6"
            y1="1.6"
            x2="17.1"
            y2="17.4"
            fill="none"
            stroke="#e6e6e6"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="3"
        />
        <line
            x1="17.5"
            y1="1.6"
            x2="1.6"
            y2="17.4"
            fill="none"
            stroke="#e6e6e6"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="3"
        />
    </svg>
);

export default SaveIcon;
