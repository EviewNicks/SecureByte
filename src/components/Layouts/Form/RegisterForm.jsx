import React, { useState } from "react";
import TextField from "../../Atom/textField/textField";
import ButtonVariant from "../../Atom/Button/Button";
import Checkbox from "../../Molekul/CheckBox/CheckBox";

const RegisterForm = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  // Fungsi untuk toggle nilai agreeTerms
  const toggleAgreeTerms = () => {
    setAgreeTerms((prev) => !prev);
  };

  const handleRegister = (e) => {
    // Tambahkan logika register di sini
    e.preventDefault();
    setRegisterMessage(`Registrasi berhasil! Email: ${email}, NIM: ${nim}`);
  };

  return (
    <form
      onSubmit={handleRegister}
      className="input-form flex py-8 px-9 items-center gap-2.5 flex-grow self-stretch w-1/2 rounded-3xl bg-whiteLayer-3"
      style={{ justifyContent: "flex-end" }} // Posisi form di kanan
    >
      <fieldset className="border-background flex p-1 flex-col items-start flex-grow rounded-[26px] bg-grad-bluesky">
        <div className="input-form-container flex py-6 px-8 justify-center items-center gap-2.5 flex-grow self-stretch rounded-3xl bg-whiteLayer-2">
          <div className="input-form-container-child flex flex-col items-center justify-between self-stretch flex-wrap-nowrap flex-grow flex-shrink-0 basis-0 relative">
            <div className="number-input-container py-2 flex flex-col justify-between items-center flex-grow self-stretch">
              <div className="head-container flex justify-center items-center self-stretch">
                <legend className="text-tl-lg text-secondary">
                  Register Your Account
                </legend>
              </div>

              {/* TextField untuk Email */}
              <TextField
                type="email"
                size="large"
                status="normal"
                label={true}
                placeholder="Email"
                inputLabel="Masukkan Email"
                inputStatus=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* TextField untuk NIM */}
              <TextField
                type="text"
                size="large"
                status="normal"
                label={true}
                placeholder="NIM"
                inputLabel="Masukkan NIM"
                inputStatus=""
                value={nim}
                onChange={(e) => setNim(e.target.value)}
              />

              {/* TextField untuk Password */}
              <TextField
                type="password"
                size="large"
                status="normal"
                label={true}
                placeholder="Password"
                inputLabel="Masukkan Password"
                inputStatus=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex pt-3 flex-col items-start gap-1.5 flex-grow w-full">
              {/* Menggunakan Checkbox untuk Persetujuan Syarat dan Ketentuan */}
              <Checkbox
                id="agreeTerms"
                label="I agree to the Terms and Conditions"
                checked={agreeTerms}
                onChange={toggleAgreeTerms}
              />

              {/* Tombol Register */}
              <ButtonVariant
                text="Register"
                shape="Box"
                size="large"
                widthMode="fill"
                primary={false}
                type="submit"
              />

              <div className="flex flex-col justify-center items-center">
                <p className="text-p-md text-secondary text-center">
                  Already have an account?{" "}
                  <a href="/login" className="text-info text-lb-md font-bold">
                    Log In
                  </a>
                </p>
              </div>

              {/* Menampilkan Pesan Register */}
              {registerMessage && (
                <p className="text-p-md text-secondary mt-4">
                  {registerMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default RegisterForm;
