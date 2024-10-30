import React from "react";

const ChevronDown = ({ color = "currentColor", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M6 10L12 16L18 10" stroke={color} strokeLinecap="round" />
  </svg>
);

export default ChevronDown;
