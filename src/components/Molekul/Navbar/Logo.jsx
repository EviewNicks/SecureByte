// Logo.jsx
import React from "react";

const Logo = ({ logoText = "SecureByte", href = "#" }) => (
  <a href={href} className="logo-container text-primary">
    <h3 className="text-h3 font-semibold">{logoText}</h3>
  </a>
);

export default Logo;
