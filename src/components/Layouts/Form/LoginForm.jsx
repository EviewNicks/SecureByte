import React, { useState, useContext } from "react";
import { AuthContext } from "../../../context/Auth";
import TextField from "../../Atom/textField/textField";
import ButtonVariant from "../../Atom/Button/Button";
import Checkbox from "../../Molekul/CheckBox/CheckBox";
import { login } from "../../../services";
import { useNavigate } from "react-router-dom";

const LoginForm = () =>
{
  const { setAuthData } = useContext(AuthContext); // Ambil setAuthData dari AuthContext
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const toggleRememberMe = () =>
  {
    setRememberMe((prev) => !prev);
  };

  // ini handleLogin Fadil

  const handleLogin = async (e) =>
  {
    e.preventDefault();

    const token = await login(email, password);
    if (token)
    {
      setLoginMessage("Login berhasil! Anda telah masuk.");

      setAuthData({
        id: localStorage.getItem("id"),
        role: localStorage.getItem("role"),
      });
      navigate("/Dashboard");
    } else
    {
      setLoginMessage("Login gagal! Silakan cek email dan password Anda.");
    }
  };


  return (
    <form
      onSubmit={handleLogin}
      className="input-form flex py-8 px-9 items-center gap-2.5 flex-grow self-stretch w-1/2 rounded-3xl bg-whiteLayer-3"
    >
      <fieldset className="border-background flex p-1 flex-col items-start flex-grow rounded-[26px] bg-grad-bluesky">
        <div className="input-form-container flex py-6 px-8 justify-center items-center gap-2.5 flex-grow self-stretch rounded-3xl bg-whiteLayer-2">
          <div className="input-form-container-child flex flex-col items-center justify-between self-stretch flex-wrap-nowrap flex-grow flex-shrink-0 basis-0 relative">
            <div className="number-input-container flex flex-col justify-between items-center flex-grow self-stretch">
              <div className="head-container flex justify-center items-center self-stretch">
                <legend className="text-tl-lg text-secondary">
                  LogIn to Your Account
                </legend>
              </div>

              {/* TextField untuk Gmail */}
              <TextField
                type="text"
                size="large"
                status="normal"
                name="email"
                label={true}
                placeholder="Gmail"
                inputLabel="Masukkan Gmail"
                inputStatus=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* TextField untuk Password */}
              <TextField
                type="password"
                size="large"
                status="normal"
                name="password"
                label={true}
                placeholder="Password"
                inputLabel="Masukkan Password"
                inputStatus=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex pt-3 flex-col items-start gap-1.5 flex-grow w-full">
              {/* Menggunakan Checkbox untuk Remember Me */}
              <Checkbox
                id="rememberMe"
                label="Remember Me?"
                checked={rememberMe}
                onChange={toggleRememberMe}
              />

              {/* Tombol Login */}
              <ButtonVariant
                text="Login"
                shape="Box"
                size="large"
                widthMode="fill"
                primary={false}
                type="submit"
              />

              <div className="flex flex-col justify-center items-center">
                <p className="text-p-md text-secondary text-center">
                  Not registered yet?{" "}
                  <a
                    href="/register"
                    className="text-info text-lb-md font-bold"
                  >
                    Register
                  </a>
                </p>
              </div>

              {/* Menampilkan Pesan Login */}
              {loginMessage && (
                <p className="text-p-md text-secondary mt-4">
                  {" "}
                  {loginMessage}{" "}
                </p>
              )}
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;
