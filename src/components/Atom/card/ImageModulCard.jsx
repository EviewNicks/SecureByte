import React from "react";
import PropTypes from "prop-types";

// ImageModuleCard component
const ImageModuleCard = ({
  imageSrc = "/assets/img/add-image.png",
  altText = "Module Image",
}) => {
  return (
    <div className="image-card flex w-[392px] p-2 flex-col justify-center items-center gap-2.5 flex-shrink-0 self-stretch">
      <div className="flex p-0.5 flex-col justify-center items-center gap-2.5 rounded-[24px] bg-gradient-to-r from-[#FFF0D1] to-[#DDB96F] shadow-[0px_8px_8px_rgba(0,0,0,0.25)]">
        <img
          src={imageSrc}
          alt={altText}
          className="w-[232px] h-[200px] rounded-xl bg-gold-in object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/img/add-image.png";
          }}
        />
      </div>
    </div>
  );
};

// Prop types
ImageModuleCard.propTypes = {
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
};

export default ImageModuleCard;
