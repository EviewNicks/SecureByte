// ModuleContainer.jsx
import React from "react";
import ImageModuleCard from "../../Atom/card/ImageModulCard";
import FlowLine from "../../Atom/Accesories/FlowLine";
import IntroductionCard from "../../Atom/card/introduction";

const ModuleSection = ({
  imageSrc = "/assets/img/add-image.png",
  altText,
  title,
  description,
  flowLinePosition = "middle",
  isOdd = true, // Menentukan susunan berdasarkan ganjil/genap
}) => {
  return (
    <article className="module-container flex min-w-[1024px] px-10 justify-between items-center self-stretch">
      {isOdd ? (
        <>
          {/* Susunan ganjil: Image, FlowLine, Introduction */}
          <div data-aos="fade-right">
            <ImageModuleCard imageSrc={imageSrc} altText={altText} />
          </div>
          <FlowLine position={flowLinePosition} />
          <div
            data-aos="fade-left"
            className="text-container flex w-[392px] flex-col justify-center items-center flex-shrink-0 self-stretch"
          >
            <IntroductionCard title={title} description={description} />
          </div>
        </>
      ) : (
        <>
          {/* Susunan genap: Image, FlowLine, Introduction */}
          <div
            data-aos="fade-right"
            className="text-container flex w-[392px] flex-col justify-center items-center flex-shrink-0 self-stretch"
          >
            <IntroductionCard title={title} description={description} />
          </div>
          <FlowLine position={flowLinePosition} />

          <div data-aos="fade-left">
            <ImageModuleCard imageSrc={imageSrc} altText={altText} />
          </div>
        </>
      )}
    </article>
  );
};

export default ModuleSection;
