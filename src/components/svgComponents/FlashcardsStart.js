import React from 'react';

export const StartButton = ({ hoverStyle }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 851.3 288.1"
    >
        <defs>
            <linearGradient
                id="a"
                x1="266.88"
                y1="121.79"
                x2="596.79"
                y2="121.79"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#fbb03b" />
                <stop offset="0.21" stopColor="#ec7347" />
                <stop offset="0.52" stopColor="#d4145a" />
                <stop offset="1" stopColor="#9e005d" />
            </linearGradient>
            <filter
                id="c"
                x="77.3"
                y="-8068.38"
                width="704.53"
                height="32766"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodColor="#fff" result="bg" />
                <feBlend in="SourceGraphic" in2="bg" />
            </filter>
            <mask
                id="b"
                x="77.3"
                y="-8068.38"
                width="704.53"
                height="32766"
                maskUnits="userSpaceOnUse"
            >
                <g filter="url(#c)" />
            </mask>
            <radialGradient
                id="d"
                cx="-3701.5"
                cy="4243.48"
                r="66.76"
                gradientTransform="matrix(0, 1, 5.15, 0, -21406.53, 3813.91)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" />
                <stop offset="0.98" stopOpacity="0" />
            </radialGradient>
            <filter
                id="f"
                x="0"
                y="-8068.38"
                width="851.34"
                height="32766"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodColor="#fff" result="bg" />
                <feBlend in="SourceGraphic" in2="bg" />
            </filter>
            <mask
                id="e"
                x="0"
                y="-8068.38"
                width="851.34"
                height="32766"
                maskUnits="userSpaceOnUse"
            >
                <g filter="url(#f)" />
            </mask>
            <linearGradient
                id="g"
                x1="317.75"
                y1="121.79"
                x2="545.92"
                y2="121.79"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#f1f1f2" />
                <stop offset="0.25" stopColor="#eeeeef" />
                <stop offset="0.42" stopColor="#e5e5e7" />
                <stop offset="0.57" stopColor="#d6d6d8" />
                <stop offset="0.7" stopColor="#c1c1c2" />
                <stop offset="0.82" stopColor="#a5a6a7" />
                <stop offset="0.94" stopColor="#838486" />
                <stop offset="1" stopColor="#6d6e70" />
            </linearGradient>
            <linearGradient
                id="h"
                x1="325.82"
                y1="121.79"
                x2="537.85"
                y2="121.79"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#a6a8ab" />
                <stop offset="0.15" stopColor="#c1c2c4" />
                <stop offset="0.31" stopColor="#d6d7d9" />
                <stop offset="0.48" stopColor="#e5e6e7" />
                <stop offset="0.69" stopColor="#eeeeef" />
                <stop offset="1" stopColor="#f1f1f2" />
            </linearGradient>
        </defs>
        <circle cx="431.8" cy="121.8" r="165" fill="url(#a)" />
        <g mask="url(#b)">
            <ellipse
                cx="429.6"
                cy="112.4"
                rx="352.3"
                ry="68.5"
                opacity="0.47"
                fill="url(#d)"
            />
        </g>
        <g mask="url(#e)">
            <rect
                x="341.4"
                y="-392.3"
                width="168.6"
                height="851.34"
                transform="translate(459.1 -392.3) rotate(90)"
                fill="lightgray"
            />
        </g>
        <circle cx="431.8" cy="121.8" r="114.1" fill="url(#g)" />
        <circle cx="431.8" cy="121.8" r="106" fill="url(#h)" />
        <path
            d="M372.7,129.1l3.9-.2a7.2,7.2,0,0,0,2.6,4.6,8.7,8.7,0,0,0,5.9,1.9,10.5,10.5,0,0,0,6.1-1.7,5.7,5.7,0,0,0,2.4-5,5.9,5.9,0,0,0-1.5-4.1,8.9,8.9,0,0,0-3.7-2.6l-4.8-2-4.8-2a9.8,9.8,0,0,1-3.7-3,8.3,8.3,0,0,1,1.6-11.2c2-1.8,4.9-2.7,8.8-2.7a17.1,17.1,0,0,1,7.7,1.6l-1.2,3.6a15.9,15.9,0,0,0-6.7-1.5,9.5,9.5,0,0,0-5.6,1.5,4.6,4.6,0,0,0-2.1,4c0,2.1,1.4,3.7,4.1,4.9l3.9,1.5,4.3,1.7a27.1,27.1,0,0,1,3.8,2.2,8.9,8.9,0,0,1,2.9,3.2,9.5,9.5,0,0,1,1.1,4.6,10.2,10.2,0,0,1-3.1,7.8c-2,1.9-5.1,2.9-9.1,2.9s-7.2-1-9.4-3A9.4,9.4,0,0,1,372.7,129.1Z"
            fill={hoverStyle}
        />
        <path d="M412,138.5h-3.8V105.2h-8.5v-3.6h21.1v3.6H412Z" fill={hoverStyle} />
        <path
            d="M443.4,138.5h-4.3l-3.7-11.9H424.5L421,138.5h-4.1l10.9-36.9h4.3Zm-8.9-15.8-4.6-15-4.4,15Z"
            fill={hoverStyle}
        />
        <path
            d="M470.9,138.5H467l-4.1-12.2H451.8v12.1H448V101.6h12.8c3.4,0,5.9,1.1,7.6,3.2a14.1,14.1,0,0,1,2.5,8.5c0,4.3-.7,7.4-2,9.4a8.2,8.2,0,0,1-2.5,2.4Zm-19.1-15.8h8.9q3.2,0,4.5-1.8l1-1.7a7.6,7.6,0,0,0,.6-2.1c.1-1.1.2-2.4.2-3.8,0-5.3-2.3-8-6.8-8h-8.4Z"
            fill={hoverStyle}
        />
        <path d="M484.1,138.5h-3.8V105.2h-8.5v-3.6h21.1v3.6h-8.8Z" fill={hoverStyle} />
    </svg>
);
