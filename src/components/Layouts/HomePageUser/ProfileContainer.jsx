// ModuleHome.jsx
import React, { useEffect } from "react";
import HeadlineBoxLine from "../../Atom/Accesories/headlineBoxLine.jsx";
import ExampleProfileCard from "../../organisms/HomePageUser/profileCard.jsx";
import HeadlineButtonBox from "../../Molekul/HomePageUser/HeadlineButtonBox.jsx";

const ProfileContainer = () => {
  return (
    <section className="flex px-20 pb-20 flex-col items-center gap-20 self-stretch min-w-screen-lg">
      <HeadlineBoxLine
        text="Developer Team"
        bgColor="bg-gold"
        textColor="text-secondary"
      />

      <ExampleProfileCard />
      {/* <HeadlineBox /> */}
    </section>
  );
};

export default ProfileContainer;
