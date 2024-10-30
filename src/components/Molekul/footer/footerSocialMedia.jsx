// SocialMediaIcon.js
import React from "react";
import ArrowRight from "../../Atom/icons/arrow/arrowRight";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "../../Atom/icons/socialMedia";

import ButtonVariant from "../../Atom/Button/Button";

const SocialMediaIcon = ({ icon: Icon, link, label }) => (
  <li>
    <a href={link} aria-label={label} className="social-media">
      <Icon />
    </a>
  </li>
);

const FooterSocialMedia = () => {
  return (
    <section className="last-column flex flex-col justify-between items-center flex-grow gap-6 h-[278px]">
      <h3 className="text-secondary text-tl-md font-semibold">
        SOCIALIZE WITH JTIK
      </h3>
      <ul className="social-media-icon flex justify-between gap-6 items-center flex-wrap m-8">
        <SocialMediaIcon icon={Facebook} link="#" label="Facebook" />
        <SocialMediaIcon icon={Twitter} link="#" label="Twitter" />
        <SocialMediaIcon icon={LinkedIn} link="#" label="LinkedIn" />
        <SocialMediaIcon icon={Instagram} link="#" label="Instagram" />
        <SocialMediaIcon icon={YouTube} link="#" label="YouTube" />
      </ul>
      <div className=" flex p-2.5 flex-col items-start rounded-[50px] bg-dark-glass ">
        <ButtonVariant
          text="Create Account"
          shape="Circle"
          size="large"
          primary={false}
          withIconRight={<ArrowRight color="#FFF0D1" />}
          onClick={() => alert("Subscribed")}
        />
      </div>
    </section>
  );
};

export default FooterSocialMedia;
