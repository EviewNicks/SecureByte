import React, { useRef, useState, useEffect } from "react";
import { AddImage, Addfile, Pdf } from "../icons/file";

const FileField = ({
  accept = "*/*",
  placeholder = "",
  fileUrl = "", // Blob URL atau URL lainnya
  onChange,
  type = "image",
}) => {
  const fileInputRef = useRef(null);
  const [filePreview, setFilePreview] = useState("");
  const [fileName, setFileName] = useState("");

  // UseEffect hanya untuk meng-update pratinjau file dari `fileUrl`
  useEffect(() => {
    if (fileUrl) {
      setFilePreview(fileUrl); // Tetap gunakan URL dari properti fileUrl untuk pratinjau
    }
  }, [fileUrl]);

  // Cleanup blob URL ketika komponen tidak lagi digunakan
  useEffect(() => {
    return () => {
      if (filePreview) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFilePreview(fileUrl); // Tetap gunakan URL blob untuk pratinjau
      setFileName(file.name); // Set nama file asli untuk ditampilkan
      onChange && onChange(file); // Pass the file directly instead of the event
    }
  };

  return (
    <div className="file-field flex flex-col items-center gap-2.5 relative">
      <div
        className="file-container w-full h-40 flex items-center justify-center bg-gray-100 rounded-lg cursor-pointer relative"
        onClick={handleFileClick}
      >
        {filePreview ? (
          type === "image" ? (
            <img
              src={filePreview}
              alt="Selected file"
              className="object-cover rounded-lg w-full h-full"
            />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Pdf className="w-10 h-10" />
              <span className="text-grey-3">
                {fileName || "No file selected"}{" "}
                {/* Tampilkan nama file asli */}
              </span>
            </div>
          )
        ) : (
          <div className="flex flex-col items-center gap-2">
            {type === "image" ? (
              <AddImage className="w-10 h-10" />
            ) : (
              <Addfile className="w-10 h-10" />
            )}
            <span className="text-grey-3">{placeholder}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg opacity-0 hover:opacity-100 flex items-center justify-center text-white font-semibold">
          Click to upload {type}
        </div>
      </div>

      <input
        type="file"
        accept={accept}
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileField;
