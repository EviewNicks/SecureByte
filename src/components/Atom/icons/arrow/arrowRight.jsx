import React from "react";

const ArrowRight = ({ color = "currentColor", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M3 12L21 12" stroke={color} strokeLinecap="round" />
    <path d="M15 18L21 12L15 6" stroke={color} strokeLinecap="round" />
  </svg>
);

export default ArrowRight;
