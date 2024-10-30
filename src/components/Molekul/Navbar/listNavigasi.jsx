// NavItem.jsx
import React from "react";

const NavItem = ({ text, href = "#", target = "_self" }) => (
  <li className="link-item flex px-2 flex-col justify-center items-center gap-2.5 flex-grow">
    <div
      className="
        link-item-wrapper flex py-2 px-8 flex-col justify-center items-center gap-2.5
        rounded-xl hover:bg-glass focus:bg-glass focus:shadow-[0px_1px_4px_0px] focus:shadow-[#FFF0D1]
        focus:border focus:border-primary active:border-2 active:border-primary active:shadow-md
        transition duration-200 ease-in-out
      "
    >
      <a
        href={href}
        target={target}
        className="
          link text-primary flex justify-center items-center gap-2.5 self-stretch
          focus:outline-none
        "
      >
        <span className="text-lb-md font-bold">{text}</span>
      </a>
    </div>
  </li>
);

const NavList = ({ links = [] }) => {
  return (
    <div className="links-container flex justify-center items-center flex-grow self-stretch">
      <ul className="links-wrapper flex max-w-[628px] justify-center items-center gap-6">
        {links.map((link, index) => (
          <NavItem
            key={index}
            text={link.text}
            href={link.href}
            target={link.target}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavList;
