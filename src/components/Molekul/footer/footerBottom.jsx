// FooterBottomSection.js
import React from "react";

const FooterBottomSection = ({ text }) => {
  return (
    <div className="footer-bottom-section flex justify-center items-center w-full py-4">
      <h4 className="text-lb-md text-secondary">{text}</h4>
    </div>
  );
};

export default FooterBottomSection;
