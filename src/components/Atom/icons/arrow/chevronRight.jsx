import React from "react";

const ChevronRight = ({ color = "currentColor", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M10 18L16 12L10 6" stroke={color} strokeLinecap="round" />
  </svg>
);

export default ChevronRight;
