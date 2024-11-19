import React from "react";
import PropTypes from "prop-types";
import TitleBox from "../../Atom/Accesories/titleBox";
import ButtonVariant from "../../Atom/Button/Button";
import { ArrowRight, ArrowLeft } from "../../Atom/icons/arrow";

const LearningSection = ({
  title = "SecureByte Edu",
  subtitle = "Belajar Keamanan Siber: Perlindungan Digital Dimulai di Sini",
  description = "Bangun pengetahuanmu tentang ancaman siber, mulai dari dasar-dasar keamanan jaringan hingga perlindungan tingkat lanjut.",
  buttonLabel = "buttonLabel",
  onButtonClick,
  moduleLinkText = "moduleLinkText",
  bgColor = "bg-[#FEE0AA]",
  borderColor = "border-[#FDC874]",
  image = "/assets/img/add-image.png", // Background image for right container
}) =>
{
  return (
    <section
      data-aos="zoom-in"
      className={`flex flex-col h-auto py-6 items-center justify-center gap-6 rounded-2xl border-2 ${borderColor} ${bgColor}`}
    >
      {/* Header with Title */}
      <header
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="flex flex-col justify-center items-center gap-2.5 self-stretch"
      >
        <TitleBox text={title} textColor="text-secondary" bgColor="bg-gold" />
      </header>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-8 px-6 lg:px-20 flex-grow w-full max-w-screen-lg mx-auto">

        {/* Image Section */}
        <div
          data-aos="fade-up-left"
          data-aos-duration="2000"
          className="flex justify-center items-center lg:w-3/4 md:w-1/2 aspect-video bg-center rounded-lg  bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>


        {/* Text and Button Section */}
        <article
          data-aos="fade-up-right"
          data-aos-duration="2000"
          className="flex flex-col justify-center items-center gap-2 flex-grow self-stretch w-full lg:col-span-6 md:col-span-6 lg:p-0 md:px-20 md:py-8 md:items-center sm:col-span-4"
        >
          <div className="flex flex-col justify-center items-center self-stretch text-center md:text-center lg:text-left">
            {/* Subtitle */}
            <div className="flex flex-col justify-center items-center flex-grow self-stretch text-secondary">
              <h2 className="text-tl-md font-semibold">{subtitle}</h2>
            </div>
            {/* Description */}
            <div className="flex flex-col justify-center items-center flex-grow self-stretch text-secondary">
              <p className="text-p-md">{description}</p>
            </div>
          </div>

          {/* Link and Button */}
          <div className="flex flex-col justify-center items-center md:self-center lg:self-start text-center ">
            <div className="flex py-1.5 px-2.5 items-center justify-center gap-2.5 self-stretch text-secondary text-center ">
              <span className="text-lb-md">{moduleLinkText}</span>
            </div>
            {/* Button with Icons on Both Sides in Tablet and Mobile */}
            <ButtonVariant
              text={buttonLabel}
              shape="Box"
              size="large"
              primary={false}
              onClick={onButtonClick}
              withIconLeft={<ArrowLeft />}
              iconLeftClass="lg:hidden md:inline" // Hanya tampil di mobile
              withIconRight={<ArrowRight />}
            />
          </div>
        </article>


      </div>
    </section >
  );
};

// Prop types
LearningSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  moduleLinkText: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  image: PropTypes.string,
};

export default LearningSection;
