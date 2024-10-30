import React from "react";

const FormInputCreateValidation = ({ formData }) => {
  return (
    <div className="validation-form flex flex-col items-center gap-4 flex-1 self-stretch">
      <div className="text-container flex flex-col items-center self-stretch">
        <h2 className="text-tl-lg text-secondary font-semibold">
          Validations Data
        </h2>
      </div>
      <div className="flex flex-col px-6 justify-between items-center flex-1 self-stretch">
        {[
          { label: "Nama", value: formData.username },
          { label: "NIM", value: formData.nim },
          { label: "Prodi", value: formData.prodi },
          { label: "Kelas", value: formData.kelas },
          { label: "Tahun", value: formData.tahun },
          { label: "Password", value: formData.password },
        ].map((item, index) => (
          <div
            className="flex justify-center items-center self-stretch"
            key={index}
          >
            <div className="flex w-[130px] py-1 items-center gap-2.5 text-secondary">
              <h4 className="text-tl-sm">{item.label}</h4>
            </div>
            <div className="flex w-[25px] py-1 px-4 pl-0 flex-col justify-center items-start gap-2.5 text-secondary">
              <h4 className="text-tl-sm">:</h4>
            </div>
            <div className="flex py-1 items-center gap-2.5 flex-[1_0_0] text-secondary">
              <h4 className="text-tl-sm">{item.value}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormInputCreateValidation;
