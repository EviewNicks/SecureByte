import React, { useState, useEffect } from "react";

import ButtonVariant from "../../Atom/Button/Button";
import { LinkedIn } from "../../Atom/icons/socialMedia";

// Fungsi untuk handle gambar error
const handleImageError = (setErrorCallback) =>
{
  setErrorCallback(true); // Set error state to true
};

const getImageComponent = (imageUrl, imageError, handleError) =>
{
  if (imageUrl && !imageError)
  {
    return (
      <img
        src={imageUrl}
        alt="Profile"
        className="w-[160px] h-[160px] rounded-full object-cover"
        onError={handleError}
      />
    );
  }
  return <div className="w-[160px] h-[160px] rounded-full bg-gold"></div>;
};


const ProfileCard = ({ imageUrl, name, className, linkedInUrl }) =>
{
  const [imageError, setImageError] = useState(false);

  const imageComponent = getImageComponent(imageUrl, imageError, () =>
    handleImageError(setImageError)
  );

  return (
    <article className="profile-card flex w-[220px] min-h-[400px] px-4 py-8 gap-4 flex-col justify-between rounded-3xl border-2 border-primary bg-radial-primary shadow-md">
      {/* Image Container */}
      <figure className="image-container w-full flex justify-center p-2 items-center rounded-full bg-glass">
        {imageComponent}
      </figure>

      {/* Info Container */}
      <div className="input-container flex flex-col items-center gap-2 w-full text-center flex-grow">
        <div className="flex justify-center items-center gap-2.5 border-b-2 border-secondary text-secondary">
          <h3 className="text-tl-sm font-bold">{name}</h3>
        </div>
        <h4 className="text-tl-sm">{className}</h4>
      </div>

      {/* LinkedIn Button */}
      <ButtonVariant
        text="LinkedIn"
        shape="Circle"
        size="medium"
        primary={false}
        withIconLeft={<LinkedIn color="#FFF0D1" />}
        onClick={() =>
        {
          if (linkedInUrl)
          {
            window.open(linkedInUrl, "_blank");
          } else
          {
            console.warn("LinkedIn URL is not available.");
          }
        }}
      />
    </article>
  );
};

export default ProfileCard;
