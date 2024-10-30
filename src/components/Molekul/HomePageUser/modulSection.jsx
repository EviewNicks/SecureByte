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
          <ImageModuleCard imageSrc={imageSrc} altText={altText} />
          <FlowLine position={flowLinePosition} />
          <div className="text-container flex w-[392px] flex-col justify-center items-center flex-shrink-0 self-stretch">
            <IntroductionCard title={title} description={description} />
          </div>
        </>
      ) : (
        <>
          {/* Susunan genap: Image, FlowLine, Introduction */}
          <div className="text-container flex w-[392px] flex-col justify-center items-center flex-shrink-0 self-stretch">
            <IntroductionCard title={title} description={description} />
          </div>
          <FlowLine position={flowLinePosition} />
          <ImageModuleCard imageSrc={imageSrc} altText={altText} />
        </>
      )}
    </article>
  );
};

export default ModuleSection;
