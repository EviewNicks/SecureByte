import React from "react";
import PropTypes from "prop-types";

// TitleBox component
const TitleBox = ({
  text = "SecureByte Edu", // default text
  textColor = "text-secondary", // default text color class
  bgColor = "bg-gold", // default background color class
}) => {
  return (
    <header className="flex flex-col justify-center items-center gap-2.5 self-stretch">
      <div
        className={`vertical-container py-5 px-16 rounded-full shadow-[0_6px_6px_rgba(0,0,0,0.2)] ${bgColor} ${textColor}`}
      >
        <h1 className="text-h-md">{text}</h1>
      </div>
    </header>
  );
};

// Prop types
TitleBox.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default TitleBox;
