import React from "react";

const ChevronUp = ({ color = "currentColor", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M18 14L12 8L6 14" stroke={color} strokeLinecap="round" />
  </svg>
);

export default ChevronUp;
