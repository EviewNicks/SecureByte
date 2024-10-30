// NavbarIconButton.jsx
import React from "react";
import PropTypes from "prop-types";

const NavbarIconButton = ({
  icon: IconComponent,
  label,
  href,
  color = "#FFF0D1",
  size = 32,
  onClick,
}) => {
  const Wrapper = href ? "a" : "button";

  return (
    <Wrapper
      href={href}
      onClick={onClick}
      aria-label={label}
      className="
        icon-navbar w-8 h-8 flex justify-center items-center cursor-pointer rounded-full
        hover:bg-glass focus:bg-glass focus:shadow-[0px_1px_4px_0px] focus:shadow-[#FFF0D1]
        focus:border focus:border-primary
        transition duration-200 ease-in-out
      "
    >
      <IconComponent color={color} width={size} height={size} />
    </Wrapper>
  );
};

NavbarIconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
};

export default NavbarIconButton;
