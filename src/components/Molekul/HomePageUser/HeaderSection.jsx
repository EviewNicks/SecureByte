import React from "react";

const HeaderSection = ({ title, subtitle, description }) =>
{
  return (
    <header className="header-section flex flex-col md:flex-row md:min-w-[768px] lg:min-w-[1024px] md:px-10 lg:px-20 justify-between items-center w-full">
      <div className="header-content flex flex-col lg:flex-row justify-between items-center flex-grow gap-6 md:gap-4 w-full">
        <div
          data-aos="fade-right"
          className="heading-container flex flex-col items-start flex-grow md:flex-grow px-8 md:px-0 lg:pr-6 w-full"
        >
          {/* Title Section */}
          <div className="title flex p-1 items-center w-full text-secondary text-center">
            <h1 className="md:text-h-lg text-h-sm">{title}</h1>
          </div>

          {/* Subtitle Section */}
          <div className="subtitle-container flex gap-4 p-2 justify-between items-center w-full">
            <div className="subtitle-wrapper flex justify-center items-center whitespace-nowrap">
              <h2 className="text-2xl text-secondary">{subtitle}</h2>
            </div>
            <div className="variant-shape flex items-center justify-center px-2">
              {/* Shape Line */}
              <svg
                className="w-full h-2"
                viewBox="0 0 382 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <rect y="2" width="382" height="4" fill="#FDC874" />
              </svg>

              {/* Arrow Shape */}
              <svg
                className="w-11 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 45 40"
                fill="none"
              >
                <path
                  d="M42.0002 20L3.62305 20M42.0002 20L26.6494 36.6666M42.0002 20L26.6494 3.33331"
                  stroke="#FDC874"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div
          data-aos="fade-left"
          className="description-container flex px-10 py-2.5 pl-10 justify-center items-center gap-2.5 flex-grow w-full"
        >
          <p className="text-p-md text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
