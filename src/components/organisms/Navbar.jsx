// Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "../Molekul/Navbar/Logo";
import NavList from "../Molekul/Navbar/listNavigasi";
import NavbarIconButton from "../Molekul/Navbar/navbarIconButton";
// import Bell from "../Atom/icons/functions/Bell";
// import User from "../Atom/icons/people/User";
import { ArrowUp } from "../Atom/icons/arrow";
import ButtonVariant from "../Atom/Button/Button";

const Navbar = () =>
{
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleDropdownToggle = () =>
  {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () =>
  {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navigation-bar z-50 fixed top-0 left-0 w-full lg:px-20 lg:pb-4 md:px-8 md:pb-2 sm:px-2 sm:pb-1 gap-2.5">
      <div className="navbar flex py-2.5 px-8 justify-between items-center rounded-xl bg-secondary">
        {/* Logo */}
        <Logo logoText="SecureByte" link="/" />

        {/* List Navigasi */}
        <div className="hidden md:flex">
          <NavList links={navLinks} />
        </div>

        {/* Hamburger (untuk mobile) */}
        <div className="md:hidden flex items-center">
          {/* <HamburgerIcon onClick={handleDropdownToggle} /> */}
          <NavbarIconButton
            icon={<ArrowUp />}
            label="Hamberger"
            onClick={handleDropdownToggle}
          />
        </div>

        {/* Kondisi untuk tombol atau ikon */}
        <div className="hidden md:flex icons-container w-[163px] justify-end items-center gap-8">
          {token ? (
            <>
              <NavbarIconButton
                icon={<Bell />}
                label="Notification"
                onClick={handleAlert}
              />
              <NavbarIconButton
                icon={<User />}
                label="Profile"
                onClick={handleAlert}
              />
            </>
          ) : (
            <ButtonVariant
              text="Login"
              shape="Box"
              size="small"
              primary={true}
              onClick={() => navigate("/login")}
            />
          )}
        </div>

        {/* Dropdown Navigasi (tampil jika Hamburger di-klik) */}
        {isDropdownOpen && (
          <div className="md:hidden bg-secondary p-4 rounded-lg absolute top-full left-0 w-full z-50 flex flex-col gap-2">
            <NavList links={navLinks} />
            <hr className="my-2 border-gray-600" />

            {/* Tambahan untuk Notification, Profile, dan Login */}
            <div className="flex flex-col items-start gap-2">
              {token ? (
                <>
                  <button
                    onClick={handleAlert}
                    className="text-white text-left w-full px-4 py-2"
                  >
                    Notification
                  </button>
                  <button
                    onClick={handleAlert}
                    className="text-white text-left w-full px-4 py-2"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-white text-left w-full px-4 py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <ButtonVariant
                  text="Login"
                  shape="Box"
                  size="small"
                  primary={false}
                  onClick={() => navigate("/login")}
                  className="w-full text-left px-4 py-2 text-white"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  role: PropTypes.string,
  token: PropTypes.string,
};

export default Navbar;
