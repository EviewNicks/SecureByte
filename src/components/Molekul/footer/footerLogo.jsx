import React from "react";
import Shape4 from "../../Atom/icons/shape/shape4";

const FooterLogo = () => (
  <div className="flex flex-col justify-center items-center gap-2 px-4 flex-grow self-stretch text-secondary text-lb-md font-bold">
    <a
      href="#"
      className="logo-text-container flex justify-center items-center gap-4"
    >
      {/* SVG logo */}
      <Shape4 size="48px" />
      <span className="text-secondary text-lb-md font-bold">
        SecureByte Edu
      </span>
    </a>
    <div className="logo-image bg-cover bg-center w-[220px] h-[200px]">
      <img src="/assets/img/Logo.png" alt="Logo" />
    </div>
  </div>
);

export default FooterLogo;
