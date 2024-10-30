// HeadlineBox.jsx
import React from "react";

const HeadlineBox = ({
  title = "title",
  subtitle = "subtitle",
  bgColor = "bg-gold",
  textColor = "text-secondary",
}) => {
  return (
    <div
      className={`w-full h-48 ${textColor} flex flex-col justify-center items-center gap-2.5 self-stretch flex-grow rounded-[140px] ${bgColor} shadow-[0_8px_8px_rgba(0,0,0,0.25)]`}
    >
      {/* Subheading Container */}
      <div className="subheading-container flex flex-col justify-center items-center gap-2.75 self-stretch">
        <h1 className="text-h1 font-semibold">{title}</h1>
        <h3 className="tl-medium text-h3 font-semibold">{subtitle}</h3>
      </div>
    </div>
  );
};

export default HeadlineBox;
