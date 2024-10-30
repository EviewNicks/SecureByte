// HeadlineButtonBox.jsx
import React from "react";
import HeadlineBox from "../../Atom/Accesories/HeadlineBox";
import ButtonVariant from "../../Atom/Button/Button";

import ArrowLeft from "../../Atom/icons/arrow/arrowLeft";
import ArrowRight from "../../Atom/icons/arrow/arrowRight";
import ArrowUp from "../../Atom/icons/arrow/arrowUp";
import ArrowDown from "../../Atom/icons/arrow/arrowDowns";

const HeadlineButtonBox = ({
  title = "title",
  subtitle = "subtitle",
  bgColor = "bg-gold",
  textColor = "text-secondary",
  buttonText = "buttonText",
  buttonShape = "Circle",
  buttonSize = "small",
  buttonPrimary = false,
  iconPosition = "right", // 'left', 'right', or 'none'
  arrowDirection = "right", // 'up', 'down', 'left', 'right'
}) => {
  // Tentukan ikon arah berdasarkan parameter arrowDirection
  const renderIcon = () => {
    switch (arrowDirection) {
      case "up":
        return <ArrowUp color="currentColor" />;
      case "down":
        return <ArrowDown color="currentColor" />;
      case "left":
        return <ArrowLeft color="currentColor" />;
      case "right":
      default:
        return <ArrowRight color="currentColor" />;
    }
  };

  return (
    <section className="headline-box relative flex flex-col items-center self-stretch">
      {/* HeadlineBox dengan teks, warna latar belakang, dan warna teks khusus */}
      <HeadlineBox
        title={title}
        subtitle={subtitle}
        bgColor={bgColor}
        textColor={textColor}
      />

      <div className="relative -top-8 flex p-2 flex-col items-start rounded-[50px] bg-dark-glass">
        <ButtonVariant
          text={buttonText}
          shape={buttonShape}
          size={buttonSize}
          primary={buttonPrimary}
          withIconLeft={iconPosition === "left" ? renderIcon() : null}
          withIconRight={iconPosition === "right" ? renderIcon() : null}
        />
      </div>
    </section>
  );
};

export default HeadlineButtonBox;
