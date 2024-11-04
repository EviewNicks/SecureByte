import React from "react";

const FlowLine = ({ position = "middle" }) => {
  const spacerSvg = {
    start: (
      <svg
        className="w-[6px] h-[404px] absolute top-0 left-[calc(50%-3px)] z-0"
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="404"
        viewBox="0 0 6 404"
        fill="none"
      >
        <rect width="6" height="404" fill="url(#paint0_linear_start)" />
        <defs>
          <linearGradient
            id="paint0_linear_start"
            x1="3"
            y1="0"
            x2="3"
            y2="404"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF9ED" stopOpacity="0" />
            <stop offset="1" stopColor="#64E9FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    middle: (
      <svg
        className="w-[6px] h-[404px] absolute top-0 left-[calc(50%-3px)] z-0"
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="404"
        viewBox="0 0 6 404"
        fill="none"
      >
        <rect width="6" height="404" fill="#64E9FF" />
      </svg>
    ),
    end: (
      <svg
        className="w-[6px] h-[404px] absolute top-0 left-[calc(50%-3px)] z-0"
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="404"
        viewBox="0 0 6 404"
        fill="none"
      >
        <rect width="6" height="404" fill="url(#paint0_linear_end)" />
        <defs>
          <linearGradient
            id="paint0_linear_end"
            x1="3"
            y1="0"
            x2="3"
            y2="404"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#64E9FF" />
            <stop offset="1" stopColor="#FFF9ED" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };

  return (
    <div className="flow-points flex h-[404px] justify-center items-center relative flex-grow">
      <div className="flex flex-col justify-center items-center relative h-[404px]">
        {/* Spacer based on position */}
        {spacerSvg[position]}

        {/* Ellipse */}
        <svg
          className="w-[36px] h-[36px] z-[1] relative"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle cx="25" cy="25" r="25" fill="#FFF9ED" />
        </svg>
      </div>
    </div>
  );
};

export default FlowLine;
