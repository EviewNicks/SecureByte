import React from "react";

const YouTube = ({ color = "#092C4C", size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path d="M18.6 16L14.4 13.6V18.4L18.6 16Z" fill={color} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.2 10.7C22.9 10.9 23.4 11.4 23.6 12.1C24 13.4 24 16 24 16C24 16 24 18.6 23.7 19.9C23.5 20.6 23 21.1 22.3 21.3C21 21.6 16 21.6 16 21.6C16 21.6 10.9 21.6 9.7 21.3C9 21.1 8.5 20.6 8.3 19.9C8 18.6 8 16 8 16C8 16 8 13.4 8.3 12.1C8.5 11.4 9 10.9 9.8 10.7C11.1 10.4 16.1 10.4 16.1 10.4C16.1 10.4 21 10.4 22.2 10.7Z"
      fill={color}
    />
  </svg>
);

export default YouTube;
