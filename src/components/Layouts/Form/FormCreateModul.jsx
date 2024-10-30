import React, { useState, useEffect } from "react";
import TextField from "../../Atom/textField/textField";
import ButtonVariant from "../../Atom/Button/Button"; // Adjust path as needed
import { CancelIcon } from "../../Atom/icons/Symbol"; // Adjust path as needed

const FormCreateModul = ({ initialData = {}, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    pdfUrl: "",
    ...initialData,
  });

  useEffect(() => {
    setFormData({ ...formData, ...initialData });
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="input-form flex w-full max-w-lg pb-6 flex-col items-end rounded-3xl bg-white p-6 shadow-md">
      {/* Remove Button */}
      <button
        type="button"
        aria-label="Remove"
        className="remove-button flex items-center flex-col justify-center rounded-tr-3xl rounded-bl-3xl bg-blackLayer-0"
        onClick={() =>
          (window.location.href = "../src/Manage_User_by_Admin.html")
        }
      >
        <div className="group p-2 flex flex-col justify-center items-center cursor-pointer">
          <CancelIcon size={48} />
        </div>
      </button>

      <div className="form-field-container flex flex-col gap-4 w-full">
        {/* Image Container */}
        <div className="flex justify-center">
          <img
            src={formData.image || "../../dist/img/add-image.png"}
            alt="Module Thumbnail"
            className="w-[264px] h-[160px] rounded-3xl bg-center bg-cover object-cover"
          />
        </div>

        {/* Title Input */}
        <TextField
          type="text"
          inputLabel="Judul Modul"
          placeholder="Masukkan Judul Modul"
          value={formData.title}
          onChange={(e) =>
            handleInputChange({
              target: { name: "title", value: e.target.value },
            })
          }
          size="large"
        />

        {/* Subtitle Text Area */}
        <TextField
          type="textarea"
          inputLabel="Deskripsi Modul"
          placeholder="Masukkan Deskripsi Modul"
          value={formData.subtitle}
          onChange={(e) =>
            handleInputChange({
              target: { name: "subtitle", value: e.target.value },
            })
          }
          size="large"
        />

        {/* PDF URL Input */}
        <TextField
          type="text"
          inputLabel="URL PDF"
          placeholder="Masukkan URL PDF"
          value={formData.pdfUrl}
          onChange={(e) =>
            handleInputChange({
              target: { name: "pdfUrl", value: e.target.value },
            })
          }
          size="large"
        />

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <ButtonVariant
            text="Add PDF"
            onClick={() => console.log("Adding PDF with URL:", formData.pdfUrl)}
            size="medium"
          />
          <ButtonVariant
            text="Simpan"
            onClick={() => onSave(formData)}
            size="large"
            primary
          />
        </div>
      </div>
    </form>
  );
};

export default FormCreateModul;
