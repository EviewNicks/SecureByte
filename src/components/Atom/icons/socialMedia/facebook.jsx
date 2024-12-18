import React from "react";

const Facebook = ({ color = "#092C4C", size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 33 32"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.5 16C0.5 7.16344 7.66344 0 16.5 0C25.3366 0 32.5 7.16344 32.5 16C32.5 24.8366 25.3366 32 16.5 32C7.66344 32 0.5 24.8366 0.5 16ZM16.5 8C20.9 8 24.5 11.6 24.5 16C24.5 20 21.6 23.4 17.6 24V18.3H19.5L19.9 16H17.7V14.5C17.7 13.9 18 13.3 19 13.3H20V11.3C20 11.3 19.1 11.1 18.2 11.1C16.4 11.1 15.2 12.2 15.2 14.2V16H13.2V18.3H15.2V23.9C11.4 23.3 8.5 20 8.5 16C8.5 11.6 12.1 8 16.5 8Z"
      fill={color}
    />
  </svg>
);

export default Facebook;
