import React from "react";

const ChevronLeft = ({ color = "currentColor", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M14 6L8 12L14 18" stroke={color} strokeLinecap="round" />
  </svg>
);

export default ChevronLeft;
