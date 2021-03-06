import React from 'react';

export const CheckIcon = ({ className, knownColor }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.6 43.3">
        <polyline
            points="3.1 24.7 17.6 38.5 48.2 3.3"
            fill="none"
            stroke={knownColor}
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="6"
        />
    </svg>
);
