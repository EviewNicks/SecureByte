// Logo.jsx
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logoText = "SecureByte", link = "/" }) => (
  <Link to={link} className="logo-container text-primary">
    <h3 className="md:text-h-sm text-lb-lg font-semibold">{logoText}</h3>
  </Link>
);

export default Logo;
