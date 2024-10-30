import React from "react";

const ArrowDown = ({ color = "currentColor", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 3V21" stroke={color} strokeLinecap="round" />
    <path d="M6 15L12 21L18 15" stroke={color} strokeLinecap="round" />
  </svg>
);

export default ArrowDown;

