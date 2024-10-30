import React from "react";

const Badge = ({
  text,
  bgColor = "bg-red-500/10",
  textColor = "text-error",
}) => (
  <div className={`badge-container px-2 rounded-md ${bgColor}`}>
    <span className={`text-sm font-semibold ${textColor}`}>{text}</span>
  </div>
);

const NewsTitle = ({ title }) => (
  <h4 className="text-lb-md text-secondary font-semibold">{title}</h4>
);

const NewsDescription = ({ description }) => (
  <p className="text-p-md text-secondary w-full">{description}</p>
);

const NewsTimestamp = ({ datetime, formattedDate }) => (
  <time dateTime={datetime} className="text-p-md text-gray-500">
    {formattedDate}
  </time>
);

const NewsImage = ({ imageUrl }) => (
  <div
    className="news-image flex-shrink-0 w-[186px] h-[140px] min-w-[186px] rounded-md bg-cover bg-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
  />
);

const NewsSection = ({
  title = "Default News Title",
  description = "This is a default news description.",
  datetime = "2024-10-07",
  formattedDate = "Oct 7, 2024",
  showBadge = false,
  badgeText = "Top",
  badgeBgColor = "bg-red-500/10",
  badgeTextColor = "text-error",
  imageUrl = "/path/to/default-image.jpg",
}) => {
  return (
    <article className="news-container flex p-5 gap-6 max-w-[680px] rounded-lg bg-whiteLayer-3 shadow-md hover:scale-95 hover:cursor-pointer transition-transform duration-300 ease-in-out">
      {/* Image Container */}
      <NewsImage imageUrl={imageUrl} />

      {/* Content News */}
      <section className="content-news flex flex-col justify-between items-start flex-grow text-secondary">
        {/* Content Section */}
        <header className="content-section flex flex-col items-start gap-4 w-full">
          {/* Title and Badge Container */}
          <div className="title-container flex justify-start items-start gap-2 w-full">
            {showBadge && (
              <Badge
                text={badgeText}
                bgColor={badgeBgColor}
                textColor={badgeTextColor}
              />
            )}
            <NewsTitle title={title} />
          </div>

          {/* News Description */}
          <NewsDescription description={description} />
        </header>

        {/* Timestamp */}
        <NewsTimestamp datetime={datetime} formattedDate={formattedDate} />
      </section>
    </article>
  );
};

export default NewsSection;
