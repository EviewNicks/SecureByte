import React from "react";

const Checkbox = ({ label, checked, onChange, id }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4"
      />
      <label htmlFor={id} className="text-lb-md">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
