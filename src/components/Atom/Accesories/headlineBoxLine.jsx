// HeadlineBoxLine.jsx
import React from "react";

const HeadlineBoxLine = ({
  text = "HeadLine Box",
  textColor = "text-secondary",
  bgColor = "bg-gold",
}) => {
  return (
    <section
      data-aos="fade-up"
      className="shape-line flex justify-between items-center flex-grow self-stretch"
    >
      {/* Left Container */}
      <div className="container flex flex-col items-center justify-center self-stretch gap-2.5 px-4 relative grow shrink-0 basis-0 min-w-0">
        <div className="rounded-rectangle-left self-stretch shrink-0 relative bg-cover z-10 rounded-lg">
          <svg
            className="svg-responsive w-full h-2"
            viewBox="0 0 293 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect
              width="292.5"
              height="6"
              rx="4"
              fill="url(#paint0_linear_168_2011)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_168_2011"
                x1="11.5842"
                y1="4.0396"
                x2="273.676"
                y2="4.03978"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFF9ED" stopOpacity="0.2" />
                <stop offset="1" stopColor="#64E9FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Vertical Container */}
      <div
        className={`vertical-container py-4 px-12 rounded-full ${bgColor} shadow-[0_8px_8px_rgba(0,0,0,0.25)]`}
      >
        <h2 className={`text-tl-md font-semibold ${textColor}`}>{text}</h2>
      </div>

      {/* Right Container */}
      <div className="container flex flex-col items-center justify-center self-stretch gap-2.5 px-4 relative grow shrink-0 basis-0 min-w-0">
        <div className="rounded-rectangle-right self-stretch shrink-0 relative bg-cover z-10 rounded-lg">
          <svg
            className="svg-responsive w-full h-2"
            viewBox="0 0 293 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect
              width="292.5"
              height="6"
              rx="4"
              fill="url(#paint0_linear_168_2012)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_168_2012"
                x1="0.5"
                y1="4"
                x2="293"
                y2="4.00032"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#64E9FF" />
                <stop offset="1" stopColor="#FFF9ED" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeadlineBoxLine;
