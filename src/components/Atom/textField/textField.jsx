import React from "react";

const TextField = ({
  type = "text", // Menambahkan properti type untuk menentukan tipe input
  size = "medium", // "textarea", "large", "medium", "small"
  status = "normal", // "success", "warning", "error", "normal"
  label = true,
  showStatus = true,
  placeholder = "Placeholder",
  inputLabel = "Label",
  inputStatus = "",
  value = "",
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  disabled = false,
  readOnly = false,
}) => {
  const sizeClasses = {
    textarea: "p-4",
    large: "p-3.5",
    medium: "p-2",
    small: "p-1",
  };

  const statusBorderClasses = {
    normal: "border-grey-2",
    success: "border-succ",
    warning: "border-warning",
    error: "border-error",
  };

  const statusTextClasses = {
    normal: "text-grey-2",
    success: "text-succ",
    warning: "text-warning",
    error: "text-error",
  };

  const focusClasses =
    "focus-within:border-info focus-within:ring-2 focus-within:ring-info transition duration-300 ease-in-out";

  return (
    <div className="flex flex-col justify-center items-center gap-1.5 flex-grow self-stretch">
      {/* Label */}
      {label && (
        <div className="label flex justify-start items-center gap-2.5 self-stretch">
          <span className="text-lb-sm text-grey-3">{inputLabel}</span>
        </div>
      )}

      {/* Input Field */}
      <div
        className={`container-input flex flex-col justify-center items-center gap-2.5 ${sizeClasses[size]} rounded-lg bg-white border ${statusBorderClasses[status]} ${focusClasses} self-stretch`}
      >
        {type === "textarea" ? (
          <textarea
            className="input-field w-full bg-transparent text- text-grey-2 placeholder:text-grey-2 focus:outline-none"
            placeholder={placeholder}
            value={value} //menghubungkan properti value
            onChange={onChange} //Menghubungkan properti onChange
            onBlur={onBlur} //Menghubungkan properti onBlur
            onFocus={onfocus} //Menghubungkan properti onFocus
            disabled={disabled} //Menghubungkan properti disabled
            readOnly={readOnly} //Menghubungkan properti readOnly
          />
        ) : (
          <input
            className="input-field w-full bg-transparent text-p-md font-normal text-grey-2 placeholder:text-grey-2 focus:outline-none"
            type={type}
            placeholder={placeholder}
            value={value} //menghubungkan properti value
            onChange={onChange} //Menghubungkan properti onChange
            onBlur={onBlur} //Menghubungkan properti onBlur
            onFocus={onfocus} //Menghubungkan properti onFocus
            disabled={disabled} //Menghubungkan properti disabled
            readOnly={readOnly} //Menghubungkan properti readOnly
          />
        )}
      </div>

      {/* Status Text */}
      {showStatus && (
        <div className="status flex justify-start items-center gap-2.5 self-stretch mt-1">
          <span
            className={`status-text text-p-lg ${statusTextClasses[status]}`}
          >
            {inputStatus}
          </span>
        </div>
      )}
    </div>
  );
};

export default TextField;
