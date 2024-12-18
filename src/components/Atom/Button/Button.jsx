const ButtonVariant = ({
  text,
  shape = "Box",
  size = "medium",
  primary = false,
  widthMode = "hug",
  withIconLeft = null,
  withIconRight = null,
  iconLeftClass = "", // Tambahan untuk class ikon kiri
  iconRightClass = "", // Tambahan untuk class ikon kanan
  type = "button",
  onClick,
  onSubmit,
  ...rest
}) =>
{
  const baseClasses =
    "inline-flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-95 active:scale-100";
  const shapeClasses = shape === "Circle" ? "rounded-full" : "rounded-lg";
  const typeClasses = primary
    ? "bg-whiteLayer-2 text-secondary border-2 border-blackLayer-0 hover:bg-whiteLayer-3 active:border-2 active:border-blackLayer-4 active:bg-whiteLayer-3"
    : "bg-blackLayer-0 text-primary hover:bg-blackLayer-1 active:border-2 active:border-blackLayer-4 active:bg-blackLayer-3";
  const sizeClasses = size === "large" ? "h-14 px-8 text-lg" : size === "medium" ? "h-12 px-6 text-md" : "h-10 px-4 text-sm";
  const widthClasses = widthMode === "fill" ? "w-full" : "w-auto";

  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      className={`${baseClasses} ${shapeClasses} ${typeClasses} ${sizeClasses} ${widthClasses}`}
      {...rest}
    >
      <div className="flex items-center gap-2">
        {withIconLeft && <span className={`flex-shrink-0 ${iconLeftClass}`}>{withIconLeft}</span>}
        <span className="text-lb-md">{text}</span>
        {withIconRight && <span className={`flex-shrink-0 ${iconRightClass}`}>{withIconRight}</span>}
      </div>
    </button>
  );
};

export default ButtonVariant;
