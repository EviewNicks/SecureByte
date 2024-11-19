import React from "react";

const HambergerIcon = ({ color = "#FFF0D1", size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
    >
        <path d="M5 15H19" stroke={color} strokeLinecap="round" />
        <path d="M5 19H19" stroke={color} strokeLinecap="round" />
        <rect x="5" y="5" width="14" height="6" stroke={color} strokeLinejoin="round" />
    </svg>
);

export default HambergerIcon;
