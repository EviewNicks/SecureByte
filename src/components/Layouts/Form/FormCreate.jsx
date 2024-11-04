import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, FileField } from "../../Atom/textField";
import ButtonVariant from "../../Atom/Button/Button";
import { CancelIcon } from "../../Atom/icons/Symbol";

const FormCreate = ({ initialData = {}, onSave, onCancel, type = "modul" }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    pdfUrl: "",
    articleUrl: "",
    image: "/assets/img/add-image.png",
    ...initialData,
  });

  useEffect(() => {
    setFormData({ ...formData, ...initialData });
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, image: imageUrl }));
    console.log("Thumbnail:", file.name);
  };

  const handlePdfChange = (file) => {
    const pdfUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, pdfUrl }));
    console.log("PDF:", file.name);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (
      type === "modul" &&
      formData.image &&
      formData.title &&
      formData.subtitle &&
      formData.pdfUrl
    ) {
      console.log("Form Data:", formData);
      if (onSave) onSave(formData);
    } else if (
      type === "article" &&
      formData.image &&
      formData.title &&
      formData.subtitle &&
      formData.articleUrl
    ) {
      console.log("Form Data:", formData);
      if (onSave) onSave(formData);
    } else {
      alert("Please fill all the required fields.");
    }
  };

  return (
    <form
      className="input-form flex w-[481px] pb-6 flex-col items-end rounded-3xl bg-whiteLayer-1"
      onSubmit={handleSave}
    >
      <button
        type="button"
        aria-label="Remove"
        className="remove-button flex items-center flex-col justify-center rounded-tr-3xl rounded-bl-3xl bg-blackLayer-0"
        onClick={() => navigate("/manage-modul")}
      >
        <div className="group p-2 flex flex-col justify-center items-center cursor-pointer">
          <CancelIcon size={48} />
        </div>
      </button>

      <div className="form-field-container flex p-6 items-center gap-2 self-stretch">
        <div className="flex w-[433px] flex-col justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
            <div className="group flex p-1 flex-col items-start gap-2.5 rounded-xl bg-dark-glass relative">
              <FileField
                accept="image/*"
                fileUrl={formData.image}
                onChange={handleImageChange}
                type="image"
              />
            </div>
          </div>

          <TextField
            type="text"
            inputLabel="Judul Modul/Artikel"
            placeholder="Masukkan Judul"
            value={formData.title}
            onChange={(e) =>
              handleInputChange({
                target: { name: "title", value: e.target.value },
              })
            }
            size="large"
          />

          <TextField
            type="textarea"
            inputLabel="Deskripsi Modul/Artikel"
            placeholder="Masukkan Deskripsi"
            value={formData.subtitle}
            onChange={(e) =>
              handleInputChange({
                target: { name: "subtitle", value: e.target.value },
              })
            }
            size="large"
          />

          {type === "modul" ? (
            <>
              <FileField
                accept=".pdf"
                fileUrl={formData.pdfUrl}
                onChange={handlePdfChange}
                type="pdf"
              />
              <TextField
                type="text"
                inputLabel="URL PDF"
                placeholder="Masukkan URL PDF"
                value={formData.pdfUrl}
                readOnly
                size="large"
              />
            </>
          ) : (
            <TextField
              type="text"
              inputLabel="Link URL Artikel"
              placeholder="Masukkan URL Artikel"
              value={formData.articleUrl}
              onChange={(e) =>
                handleInputChange({
                  target: { name: "articleUrl", value: e.target.value },
                })
              }
              size="large"
            />
          )}

          <div className="flex px-6 items-center w-full">
            <ButtonVariant
              text="Simpan"
              widthMode="fill"
              size="large"
              primary
              type="submit"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormCreate;
