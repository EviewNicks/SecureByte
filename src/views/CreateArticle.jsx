import React, { useState } from "react";
import { FormCreate } from "../components/Layouts/Form";

const CreateArticle = ({ initialFormData = {}, onSave, onCancel }) => {
  const handleSave = (data) => {
    if (onSave) onSave(data); // Handle save action outside this component
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  return (
    <div className=" flex justify-center items-center w-full min-h-screen">
      <div className="create-user-account-box flex w-full h-auto mx-20 flex-col justify-center items-center rounded-3xl">
        {/* Form Create Modul */}
        <FormCreate
          type="article"
          initialData={initialFormData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default CreateArticle;
