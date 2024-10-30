import React from "react";
import LearningSection from "../HomePageUser/LearningSection";
import IntroductionCard from "../../Atom/card/introduction";

const ExampleLearningSection = () => {
  const handleButtonClick = (e) => {
    e.preventDefault(); // Mematikan tombol default yang dibuat oleh React Router
    alert("Button clicked!");
  };

  return (
    <>
      <LearningSection
        image="/assets/img/Headline-Image.png"
        onButtonClick={handleButtonClick}
      />

      <IntroductionSection />
    </>
  );
};

export default ExampleLearningSection;
