import React from "react";
import ProfileCard from "../../Molekul/HomePageUser/profileCard";

const ExampleProfileCard = () => {
  return (
    <section className="profile-card-container flex p-8 justify-center items-center content-center gap-4 flex-wrap w-full">
      <ProfileCard
        imageUrl=""
        name="Ardiansyah"
        className="Tekom E"
        linkedInUrl="https://linkedin.com/in/ardiansyah"
      />
      <ProfileCard
        imageUrl=""
        name="Nadia Rahman"
        className="Sistem Informasi G"
        linkedInUrl="https://linkedin.com/in/nadiarahman"
      />
    </section>
  );
};

export default ExampleProfileCard;
