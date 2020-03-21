import React from 'react';

const TickIcon = ({ width = '100%', className = '', viewBox = '0 0 32 32' }) => (
    <svg
        className={className}
        width={width}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
    >
        <polyline
            points="113.2 110.5 127.7 124.3 158.3 89.1"
            fill="none"
            stroke="#e6e6e6"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="6"
        />
    </svg>
);

export default TickIcon;
