import React from "react";
import PropTypes from "prop-types";
import TitleBox from "../../Atom/Accesories/titleBox";
import ButtonVariant from "../../Atom/Button/Button";
import ArrowRight from "../../Atom/icons/arrow/arrowRight";

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
      className={`flex h-[468px] py-6 flex-col items-start self-stretch rounded-2xl border-2 ${borderColor} ${bgColor}`}
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
      <div className="flex px-20 justify-between items-start flex-grow self-stretch">
        {/* Text and Button Section */}
        <article
          data-aos="fade-up-right"
          data-aos-duration="2000"
          className="flex flex-col justify-center items-center gap-2 flex-grow self-stretch w-full"
        >
          <div className="flex flex-col justify-center items-center self-stretch">
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
          <div className="flex flex-col justify-center items-start self-stretch">
            <div className="flex py-1.5 px-2.5 items-center gap-2.5 self-stretch text-secondary">
              <span className="text-lb-md">{moduleLinkText}</span>
            </div>
            <ButtonVariant
              text={buttonLabel}
              shape="Box"
              size="large"
              primary={false}
              onClick={onButtonClick}
              withIconRight={<ArrowRight />}
            />
          </div>
        </article>

        {/* Image Section */}
        <div
          data-aos="fade-up-left"
          data-aos-duration="2000"
          className="flex justify-center items-center gap-2.5 flex-grow self-stretch w-full p-9 rounded-lg"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </section>
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
