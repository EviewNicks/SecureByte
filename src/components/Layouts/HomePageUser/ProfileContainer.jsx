// ModuleHome.jsx
import React, { useEffect } from "react";
import HeadlineBoxLine from "../../Atom/Accesories/headlineBoxLine.jsx";
import ExampleProfileCard from "../../organisms/HomePageUser/profileCard.jsx";
import HeadlineButtonBox from "../../Molekul/HomePageUser/HeadlineButtonBox.jsx";

const ProfileContainer = () => {
  return (
    <section class="flex px-20 pb-20 flex-col items-center gap-20 self-stretch min-w-screen-lg">
      <HeadlineBoxLine
        text="Modul Pembelajaran"
        bgColor="bg-gold"
        textColor="text-secondary"
      />

      <ExampleProfileCard />

      <HeadlineButtonBox
        title="DATA SCIENCE MODULE"
        subtitle="BY DataTech Academy"
        buttonText="Modul CeyberSecurity"
        iconPosition="right" // Ikon di sebelah kanan
        arrowDirection="right"
      />
      {/* <HeadlineBox /> */}
    </section>
  );
};

export default ProfileContainer;
