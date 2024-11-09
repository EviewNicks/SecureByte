// Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Molekul/Navbar/Logo";
import NavList from "../Molekul/Navbar/listNavigasi";
import NavbarIconButton from "../Molekul/Navbar/navbarIconButton";
import Bell from "../Atom/icons/functions/Bell";
import User from "../Atom/icons/people/user";
import ButtonVariant from "../Atom/Button/Button";

const Navbar = () =>
{
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleAlert = () =>
  {
    alert("Fitur ini belum tersedia. Silakan tunggu update selanjutnya.");
  };

  const navLinks =
    role === "admin"
      ? [
        { text: "Home", href: "/manage-user" },
        { text: "Modul", href: "/manage-modul" },
        { text: "Article", href: "/manage-article" },
      ]
      : [
        { text: "Home", href: "/" },
        { text: "Modul", href: "/modul-page" },
        { text: "Article", href: "/article-page" },
      ];

  return (
    <nav className="navigation-bar z-50 fixed top-0 left-0 w-full px-20 pb-4 self-stretch gap-2.5">
      <div className="navbar flex py-2.5 px-8 justify-between items-center rounded-xl bg-secondary self-stretch">
        {/* Logo */}
        <Logo logoText="SecureByte" link="/" />

        {/* List Navigasi */}
        <NavList links={navLinks} />

        {/* Kondisi untuk tombol atau ikon */}
        <div className="icons-container flex w-[163px] justify-end items-center gap-8 self-stretch">
          {token ? (
            <>
              <NavbarIconButton
                icon={Bell}
                label="Notification"
                href="/login"
                onClick={handleAlert} // Menampilkan alert untuk fitur belum tersedia
              />
              <NavbarIconButton
                icon={User}
                label="Profile"
                href="/register"
                onClick={handleAlert} // Menampilkan alert untuk fitur belum tersedia
              />
            </>
          ) : (
            <ButtonVariant
              text="Login"
              shape="Box"
              size="small"
              primary={false}
              onClick={() => navigate("/login")}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
