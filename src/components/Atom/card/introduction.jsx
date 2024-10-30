import React from "react";

const IntroductionCard = ({ title, description }) => {
  return (
    <article className=" flex flex-col justify-center items-center flex-grow w-full">
      <div className="text-card flex p-4 flex-col items-center gap-4 self-stretch rounded-2xl bg-gold-out">
        {/* Header Container */}
        <div className="flex flex-col justify-center items-center self-stretch">
          <div className="flex justify-center items-center gap-2.5 self-stretch">
            <h4 className="text-tl-sm text-center text-secondary">{title}</h4>
          </div>

          {/* SVG Divider */}
          <svg
            width="100%"
            height="2"
            viewBox="0 0 320 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect width="320" height="2" fill="url(#paint0_linear_695_4036)" />
            <defs>
              <linearGradient
                id="paint0_linear_695_4036"
                x1="2.01166e-06"
                y1="1"
                x2="320"
                y2="0.999856"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#092C4C" />
                <stop offset="0.5" stopColor="#FFF9ED" stopOpacity="0.2" />
                <stop offset="1" stopColor="#092C4C" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Body Container */}
        <div className="flex p-2.5 justify-center items-center gap-2.5 self-stretch">
          <p className="text-center text-secondary text-p-sm">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default IntroductionCard;
