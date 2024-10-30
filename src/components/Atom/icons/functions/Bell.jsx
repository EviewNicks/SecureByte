// BellIcon.jsx
import React from "react";

const Bell = ({ color = "currentColor", size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0003 4C20.4186 4 24.0003 7.58166 24.0003 11.9999C24.0003 14.5508 24.0003 17.1122 24.0003 18.6667C24.0003 22.6667 26.667 24 26.667 24L5.33366 24C5.33366 24 8.00033 22.6667 8.00033 18.6667C8.00033 17.1122 8.00033 14.5508 8.00033 11.9999C8.00033 7.58166 11.582 4 16.0003 4V4Z"
      stroke={color}
      strokeLinejoin="round"
    />
    <path
      d="M13.3337 24C13.3337 25.4728 14.5276 26.6667 16.0003 26.6667C17.4731 26.6667 18.667 25.4728 18.667 24"
      stroke={color}
    />
  </svg>
);

export default Bell;
