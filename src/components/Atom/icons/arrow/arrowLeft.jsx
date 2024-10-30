import React from "react";

const ArrowLeft = ({ color = "currentColor", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M21 12L3 12" stroke={color} strokeLinecap="round" />
    <path d="M9 6L3 12L9 18" stroke={color} strokeLinecap="round" />
  </svg>
);

export default ArrowLeft;
