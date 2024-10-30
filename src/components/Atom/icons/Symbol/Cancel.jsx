import React, { useState } from "react";

const CancelIcon = ({
  color = "#FFF0D1",
  hoverFill = "#FFF0D1",
  hoverStroke = "#092C4C",
  size = 24,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsActive(false);
  };
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  const fillColor = isActive ? "#092C4C" : isHovered ? hoverFill : "none";
  const strokeColor = isActive ? "#FFF0D1" : isHovered ? hoverStroke : color;
  const iconSize = isHovered ? size - 4 : size;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      className="transition-all duration-500 ease-in-out cursor-pointer"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.92893 19.0711C8.83418 22.9764 15.1658 22.9764 19.0711 19.0711C22.9763 15.1659 22.9763 8.83422 19.0711 4.92898C15.1658 1.02373 8.83418 1.02373 4.92893 4.92898C1.02369 8.83422 1.02369 15.1659 4.92893 19.0711Z"
        fill={fillColor}
        stroke={strokeColor}
      />
      <path
        d="M15.5356 15.5355L8.46452 8.46443"
        stroke={strokeColor}
        strokeLinecap="round"
      />
      <path
        d="M8.46441 15.5355L15.5355 8.46443"
        stroke={strokeColor}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CancelIcon;
