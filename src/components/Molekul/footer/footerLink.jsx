import React from "react";

const FooterLink = ({ href, label }) => (
  <li>
    <a href={href} className="hover:text-primary">
      {label}
    </a>
  </li>
);

export default FooterLink;
