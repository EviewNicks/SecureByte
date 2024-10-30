import React from "react";

const LinkedIn = ({ color = "#092C4C", size = 32 }) => (
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
      d="M0.25 16C0.25 7.16344 7.41344 0 16.25 0C25.0866 0 32.25 7.16344 32.25 16C32.25 24.8366 25.0866 32 16.25 32C7.41344 32 0.25 24.8366 0.25 16ZM8.45 13.3V24H11.85V13.3H8.45ZM8.25 9.9C8.25 11 9.05 11.8 10.15 11.8C11.25 11.8 12.05 11 12.05 9.9C12.05 8.8 11.25 8 10.15 8C9.15 8 8.25 8.8 8.25 9.9ZM20.85 24H24.05V17.4C24.05 14.1 22.05 13 20.15 13C18.45 13 17.25 14.1 16.95 14.8V13.3H13.75V24H17.15V18.3C17.15 16.8 18.15 16 19.15 16C20.15 16 20.85 16.5 20.85 18.2V24Z"
      fill={color}
    />
  </svg>
);

export default LinkedIn;
