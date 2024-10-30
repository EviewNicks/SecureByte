import React, { useState } from "react";
import { FormCreateModul } from "../components/Layouts/Form";

const PageCreateModul = ({ initialFormData = {}, onSave, onCancel }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSave = (data) => {
    if (onSave) onSave(data); // Handle save action outside this component
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="create-modul-box w-full mx-4 max-w-3xl flex flex-col items-center p-6 rounded-3xl bg-white shadow-lg">
        <FormCreateModul
          initialData={initialFormData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default PageCreateModul;
