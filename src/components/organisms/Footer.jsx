import React from "react";
import FooterColumn from "../Molekul/footer/footerColumn";
import FooterLink from "../Molekul/footer/footerLink";
import FooterLogo from "../Molekul/footer/footerLogo";
import FooterSocialMedia from "../Molekul/footer/footerSocialMedia";
import FooterBottomSection from "../Molekul/footer/footerBottom";

const Footer = () => (
  <footer className="footer lg:col-span-12 md:col-span-6 sm:col-span-4 flex flex-col justify-center items-center self-stretch w-full py-2">
    {/* <!-- Main Section --> */}
    <div className="footer-main-section flex justify-between items-center flex-wrap pb-4 border-b-2 border-secondary w-full">
      {/* First Column: Logo and Image */}
      <FooterColumn>
        <FooterLogo />
      </FooterColumn>

      {/* Second Column: Links (MODUL, BERITA, UPDATE) */}
      <FooterColumn>
        <ul className="column-content flex flex-col justify-center items-center gap-6 px-4 flex-grow self-stretch text-secondary text-lb-sm font-bold">
          <FooterLink href="/" label="MODUL" />
          <FooterLink href="/" label="BERITA" />
          <FooterLink href="/" label="UPDATE" />
        </ul>
      </FooterColumn>

      {/* Third Column: Links (ABOUT, FAQ, etc.) */}
      <FooterColumn>
        <ul className="column-content flex flex-col justify-center items-center gap-6 px-4 flex-grow self-stretch text-secondary text-lb-sm font-bold">
          <FooterLink href="/" label="ABOUT" />
          <FooterLink href="/" label="FAQ" />
          <FooterLink href="/" label="SYARAT DAN KETENTUAN" />
          <FooterLink href="/" label="KETENTUAN PRIVASI" />
        </ul>
      </FooterColumn>
      <FooterSocialMedia />
    </div>
    {/* Footer Bottom Section  */}
    <FooterBottomSection text="2023 © SecureByte Edu - BY KELOMPOK 4 - CYBERSECURITY" />
  </footer>
);

export default Footer;
