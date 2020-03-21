import React from 'react';

const SaveIcon = ({ className = 'flashcardIcon' }) => (
    <div className={className}>
        <svg width="150px" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M166.7,106.7,151.3,91.3a4.3,4.3,0,0,0-3.1-1.3H126.3a5.1,5.1,0,0,0-5.1,5.1v36.6a5.1,5.1,0,0,0,5.1,5.1h36.6a5.1,5.1,0,0,0,5.1-5.1V109.9A4.4,4.4,0,0,0,166.7,106.7Zm-22.1,26.9a11.9,11.9,0,1,1,12-11.9A11.9,11.9,0,0,1,144.6,133.6Zm9.8-31.3a4.3,4.3,0,0,1-4,4.5H127a4.3,4.3,0,0,1-4-4.5V98.9a4.3,4.3,0,0,1,4-4.5h23.4a4.3,4.3,0,0,1,4,4.5Z"
                fill="#fff"
                stroke="#e6e6e6"
                strokeMiterlimit="10"
            />
        </svg>
    </div>
);

export default SaveIcon;
