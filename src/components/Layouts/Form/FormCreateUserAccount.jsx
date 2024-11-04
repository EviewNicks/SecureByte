import React, { useState, useEffect } from "react";
import ButtonVariant from "../../Atom/Button/Button";
import { CancelIcon } from "../../Atom/icons/Symbol";
import { useNavigate } from "react-router-dom";
import {
  FormInputCreateAccount,
  FormInputCreatePassword,
  FormInputCreateValidation,
} from "../../organisms/FormInput";

const FormCreateUserAccount = ({ activeIndex, setActiveIndex }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    nim: "",
    prodi: "",
    kelas: "",
    tahun: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    // Mengatur currentForm berdasarkan activeIndex yang diterima
    if (activeIndex === 0) setCurrentForm("createAccount");
    else if (activeIndex === 1) setCurrentForm("password");
    else if (activeIndex === 2) setCurrentForm("validation");
  }, [activeIndex]);

  const [currentForm, setCurrentForm] = useState("createAccount");

  const handleNext = () => {
    if (currentForm === "createAccount" && isFormAccountFilled()) {
      setActiveIndex(1);
    } else if (currentForm === "password" && isFormPasswordFilled()) {
      setActiveIndex(2);
    }
  };

  const handleReset = () => {
    setFormData({
      username: "",
      nim: "",
      prodi: "",
      kelas: "",
      tahun: "",
      password: "",
      confirmPassword: "",
    });
    setActiveIndex(0);
  };

  const handleFinalSubmit = () => {
    console.log("Final Data Submitted:", formData);
    handleReset();
  };

  const isFormAccountFilled = () =>
    formData.username &&
    formData.nim &&
    formData.prodi &&
    formData.kelas &&
    formData.tahun;

  const isFormPasswordFilled = () =>
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;

  return (
    <div className="form-input flex flex-col items-end flex-grow self-stretch rounded-3xl bg-whiteLayer-1">
      {/* Remove Button */}
      <button
        type="button"
        aria-label="Remove"
        className="remove-button flex items-center flex-col justify-center rounded-tr-3xl rounded-bl-3xl bg-blackLayer-0"
        onClick={() => navigate("/manage-user")}
      >
        <div className="group p-2 flex flex-col justify-center items-center cursor-pointer">
          <CancelIcon size={48} />
        </div>
      </button>

      <div className="input-form-container flex px-6 justify-between items-center flex-grow self-stretch">
        <form className="form-container flex flex-col items-center gap-5 flex-grow self-stretch">
          <div className="form flex flex-col justify-between items-center flex-grow self-stretch">
            <div className="text-container flex flex-col items-center self-stretch">
              <h2 className="text-tl-lg text-secondary">
                {currentForm === "createAccount"
                  ? "Create User Account"
                  : currentForm === "password"
                    ? "Create Password"
                    : "Validation Data"}
              </h2>
            </div>

            {/* Render form based on the current stage */}
            {currentForm === "createAccount" && (
              <FormInputCreateAccount
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {currentForm === "password" && (
              <FormInputCreatePassword
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {currentForm === "validation" && (
              <FormInputCreateValidation formData={formData} />
            )}
          </div>

          <div className="segmented-picker flex justify-end items-center gap-4 py-4 self-stretch">
            <ButtonVariant
              text="Reset"
              onClick={handleReset}
              size="large"
              primary={true}
              widthMode="none"
            />
            {currentForm === "validation" ? (
              <ButtonVariant
                text="Submit"
                onClick={handleFinalSubmit}
                size="large"
                primary={false}
                widthMode="none"
              />
            ) : (
              <ButtonVariant
                text="Next"
                onClick={handleNext}
                size="large"
                primary={false}
                widthMode="none"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCreateUserAccount;
