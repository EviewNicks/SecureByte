import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ text, href = "/" }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <li
      className={`link-item flex px-2 flex-col justify-center items-center gap-2.5 flex-grow`}
    >
      <Link
        to={href}
        className={`
          link-item-wrapper flex py-2 px-8 flex-col justify-center items-center gap-2.5
          rounded-xl ${isActive ? "bg-glass border border-primary shadow-[0px_1px_4px_0px] shadow-[#FFF0D1]" : "hover:bg-glass"}
          transition duration-200 ease-in-out
        `}
      >
        <div className="link text-primary flex justify-center items-center gap-2.5 self-stretch">
          <span className="text-lb-md font-bold">{text}</span>
        </div>
      </Link>
    </li>
  );
};

const NavList = ({ links = [] }) => {
  return (
    <div className="links-container flex justify-center items-center flex-grow self-stretch">
      <ul className="links-wrapper flex max-w-[628px] justify-center items-center gap-6">
        {links.map((link, index) => (
          <NavItem key={index} text={link.text} href={link.href} />
        ))}
      </ul>
    </div>
  );
};

export default NavList;
