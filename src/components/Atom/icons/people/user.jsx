// UserIcon.jsx
import React from "react";

const User = ({ color = "currentColor", size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M7.33301 26C7.33301 26 11.9997 24 13.333 22.6667C14.6663 21.3333 10.6663 21.3333 10.6663 14.6667C10.6663 8 15.9997 8 15.9997 8C15.9997 8 21.333 8 21.333 14.6667C21.333 21.3333 17.333 21.3333 18.6663 22.6667C19.9997 24 24.6663 26 24.6663 26"
      stroke={color}
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0003 29.3334C23.3641 29.3334 29.3337 23.3638 29.3337 16C29.3337 8.63622 23.3641 2.66669 16.0003 2.66669C8.63653 2.66669 2.66699 8.63622 2.66699 16C2.66699 23.3638 8.63653 29.3334 16.0003 29.3334Z"
      stroke={color}
    />
  </svg>
);

export default User;
