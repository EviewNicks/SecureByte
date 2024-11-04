// Logo.jsx
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logoText = "SecureByte", link = "/" }) => (
  <Link to={link} className="logo-container text-primary">
    <h3 className="text-h3 font-semibold">{logoText}</h3>
  </Link>
);

export default Logo;
