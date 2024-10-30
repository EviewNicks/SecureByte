import React from "react";

const ArrowUp = ({ color = "currentColor", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 21L12 3" stroke={color} strokeLinecap="round" />
    <path d="M18 9L12 3L6 9" stroke={color} strokeLinecap="round" />
  </svg>
);

export default ArrowUp;

