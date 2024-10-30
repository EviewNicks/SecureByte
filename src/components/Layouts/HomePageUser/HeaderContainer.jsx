import React from "react";
import LearningSection from "../../organisms/HomePageUser/LearningSection";
import HeadlineBoxLine from "../../Atom/Accesories/headlineBoxLine";
import IntroductionSection from "../../organisms/HomePageUser/IntroductionContainer";

const HeaderContainer = () => {
  const handleButtonClick = (e) => {
    e.preventDefault(); // Mematikan tombol default yang dibuat oleh React Router
    alert("Button clicked!");
  };

  return (
    <section className="flex px-20 pb-20 flex-col items-center gap-20 self-stretch min-w-screen-lg">
      <LearningSection
        moduleLinkText="Nikmati Fitur Pilihannya!!"
        buttonLabel="Create Account"
        image="/assets/img/Headline-Image.png"
        onButtonClick={handleButtonClick}
      />
      <HeadlineBoxLine text="CYBERSECURITY" />
      <IntroductionSection />
    </section>
  );
};

export default HeaderContainer;
