import React from "react";

// Komponen Arrow Icon
const ArrowIcon = ({ isActive }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 25"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12.5C2 18.0228 6.47715 22.5 12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5Z"
      fill={isActive ? "#FFF0D1" : "none"}
      stroke={isActive ? "#092C4C" : "#FFF0D1"}
    />
    <path
      d="M7.5 12.5L16.5 12.5"
      stroke={isActive ? "#092C4C" : "#FFF0D1"}
      strokeLinecap="round"
    />
    <path
      d="M13.5 15.5L16.5 12.5L13.5 9.5"
      stroke={isActive ? "#092C4C" : "#FFF0D1"}
      strokeLinecap="round"
    />
  </svg>
);
const Breadcrumb = ({
  items,
  activeIndex,
  handleBreadcrumbClick,
  isFormAccountFilled,
  isFormPasswordFilled,
}) => {
  return (
    <nav className="flex flex-col items-start" aria-label="Breadcrumb">
      <div className="flex p-2 px-4 items-start gap-2.5 rounded-tl-3xl rounded-br-3xl bg-secondary">
        <ul className="flex items-center" aria-label="Progress Bar">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2 pr-4">
              <a
                href={item.href}
                aria-label={item.label}
                onClick={(e) => {
                  e.preventDefault();
                  if (
                    (index === 1 && isFormAccountFilled()) ||
                    (index === 2 &&
                      isFormAccountFilled() &&
                      isFormPasswordFilled())
                  ) {
                    handleBreadcrumbClick(index);
                  }
                }}
                className="whitespace-nowrap cursor-pointer"
              >
                <span
                  className={`text-lb-md font-semibold ${
                    index <= activeIndex ? "text-primary" : "text-info"
                  }`}
                >
                  {item.label}
                </span>
              </a>
              {index < items.length - 1 && (
                <ArrowIcon isActive={index <= activeIndex - 1} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
