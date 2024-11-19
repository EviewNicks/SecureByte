import React from "react";
import { useNavigate } from "react-router-dom";
import LearningSection from "../../organisms/HomePageUser/LearningSection";
import HeadlineBoxLine from "../../Atom/Accesories/headlineBoxLine";
import IntroductionSection from "../../organisms/HomePageUser/IntroductionContainer";

const HeaderContainer = () =>
{
  const navigate = useNavigate();

  const handleButtonClick = (e) =>
  {
    e.preventDefault();
    navigate("/login"); // Navigasi ke halaman pendaftaran
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="500"
      className="lg:col-span-12 md:col-span-6 sm:col-span-4 flex flex-col items-center px-4 pb-8 gap-10 self-stretch"
    >
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
