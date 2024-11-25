// src/components/Navbar.jsx
import React from "react";
import NavbarIconButton from "./navbarIconButton";
import Bell from "../../Atom/icons/functions/Bell";
import User from "../../Atom/icons/people/User";
// import NavbarIconButton from "/var/www/SecureByte/src/components/Molekul/Navbar/navbarIconButton.jsx";
// import Bell from "/var/www/SecureByte/src/components/Atom/icons/functions/Bell";
// import User from "/var/www/SecureByte/src/components/Atom/icons/people/user";
const IconNavbar = () =>
{
  const handleNotificationClick = () =>
  {
    alert("Notifikasi diklik!");
  };

  const handleProfileClick = () =>
  {
    alert("Profil diklik!");
  };

  return (
    <div className="icons-container flex w-[163px] justify-end items-center gap-8 self-stretch">
      <NavbarIconButton
        icon={Bell}
        label="Notification"
        color="#FFF0D1"
        size={32}
        onClick={handleNotificationClick}
      />
      <NavbarIconButton
        icon={User}
        label="Profile"
        color="#FFF0D1"
        size={32}
        onClick={handleProfileClick}
      />
    </div>
  );
};

export default IconNavbar;
