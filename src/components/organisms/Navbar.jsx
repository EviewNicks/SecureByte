// Navbar.jsx
import React from "react";
import Logo from "../Molekul/Navbar/Logo";
import NavList from "../Molekul/Navbar/listNavigasi";
import NavbarIconButton from "../Molekul/Navbar/navbarIconButton";
import Bell from "../Atom/icons/functions/Bell";
import User from "../Atom/icons/people/user";

const Navbar = () => {
  const navLinks = [
    { text: "Home", href: "/home" },
    { text: "Modul", href: "/modul" },
    { text: "Berita", href: "/berita" },
  ];

  return (
    <nav className="navigation-bar px-20 pb-4 self-stretch gap-2.5">
      <div className="navbar flex py-2.5 px-8 justify-between items-center rounded-xl bg-secondary self-stretch">
        {/* Logo */}
        <Logo logoText="SecureByte" href="#" />

        {/* List Navigasi */}
        <NavList links={navLinks} />

        {/* Ikon dengan Button */}
        <div className="icons-container flex w-[163px] justify-end items-center gap-8 self-stretch">
          <NavbarIconButton
            icon={Bell}
            label="Notification"
            href="/notification"
          />
          <NavbarIconButton icon={User} label="Profile" href="/profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
