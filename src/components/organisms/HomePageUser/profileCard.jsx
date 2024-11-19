import React from "react";
import ProfileCard from "../../Molekul/HomePageUser/profileCard";

const ProfileCard = () =>
{

  return (
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
  );
};

export default ExampleProfileCard;
