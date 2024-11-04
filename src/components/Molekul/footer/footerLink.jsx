import React from "react";

const FooterLink = ({ href, label }) => (
  <li>
    <a href={href} className="hover:text-info">
      {label}
    </a>
  </li>
);

export default FooterLink;
