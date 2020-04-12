import React from 'react';

export const CrossIcon = ({ className, isUnknownAdded }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.1 41.8">
        <line
            x1="3.5"
            y1="3.2"
            x2="38"
            y2="38.5"
            fill="none"
            stroke={isUnknownAdded}
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="6"
        />
        <line
            x1="38.8"
            y1="3.2"
            x2="3.5"
            y2="38.5"
            fill="none"
            stroke={isUnknownAdded}
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="6"
        />
    </svg>
);
