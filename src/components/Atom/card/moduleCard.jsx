const ModuleCard = ({
  thumbnail,
  title = "Default Title",
  subtitle = "Default Subtitle",
  pdfUrl = "#",
}) => {
  const thumbnailStyle = {
    backgroundImage: thumbnail
      ? `url(${thumbnail})`
      : "url('/assets/img/add-image.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-0.5 bg-dark-glass rounded-3xl shadow-md"
    >
      <article className="module-card flex w-[210px] h-[300px] p-[2px] pb-2 flex-col justify-between items-center rounded-[22px] bg-gold-out hover:scale-95 hover:cursor-pointer transition-transform duration-300 ease-in-out">
        {/* Thumbnail */}
        <div
          className="image h-[115px] flex-shrink-0 w-full rounded-t-[20px] bg-center bg-cover no-repeat"
          style={thumbnailStyle}
        ></div>

        {/* Title and Divider */}
        <div className="flex flex-col gap-4 items-center self-stretch py-2">
          <div className="flex justify-center items-center gap-2.5 self-stretch">
            <span className="text-lb-sm text-center text-secondary">
              {title}
            </span>
          </div>
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

        {/* Subtitle */}
        <div className="flex p-2.5 justify-center items-center gap-2.5 self-stretch flex-grow h-full">
          <p className="text-center text-secondary text-p-sm">{subtitle}</p>
        </div>
      </article>
    </a>
  );
};

export default ModuleCard;
