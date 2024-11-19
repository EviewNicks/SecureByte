// ModuleHome.jsx
import React, { useEffect } from "react";
import profiles from "../../../data/profile.json";

import HeadlineBoxLine from "../../Atom/Accesories/headlineBoxLine.jsx";
import ProfileCard from "../../Molekul/HomePageUser/profileCard";

const ProfileContainer = () =>
{
  return (
    <section className="lg:col-span-12 md:col-span-6 sm:col-span-4 px-4 md:px-10 lg:px-20 pb-20 flex flex-col items-center gap-20">
      <HeadlineBoxLine
        text="Developer Team"
        bgColor="bg-gold"
        textColor="text-secondary"
      />

      <section
        data-aos="zoom-in"
        className="profile-card-contaier flex p-8 justify-center items-center content-center gap-4 flex-wrap w-full"
      >
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            imageUrl={profile.imageUrl}
            name={profile.name}
            className={profile.className}
            linkedInUrl={profile.linkedInUrl}
          />
        ))}
      </section>
    </section>
  );
};

export default ProfileContainer;
