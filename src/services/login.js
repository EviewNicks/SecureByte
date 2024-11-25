import axios from "axios";
import { jwtVerify } from "jose";

// URL login API
const LOGIN_URL = "http://localhost:3000/api/login";

// Mengonversi secret key menjadi Uint8Array
const secretKey = new TextEncoder().encode("122");

// alalslsa

// Fungsi untuk mengirim request login ke backend
async function login(email, password) {
  try {
    const response = await axios.post(LOGIN_URL, {
      email: email,
      password: password,
    });

    const token = response.data.token;

    const { payload } = await jwtVerify(token, secretKey);

    // Menyimpan token dan payload dalam localStorage atau sesi (opsional)
    localStorage.setItem("token", token);
    localStorage.setItem("id", payload.id);
    localStorage.setItem("role", payload.role);
    console.log(localStorage.getItem("id"));
    console.log(localStorage.getItem("role"));
    // localStorage.setItem("user", JSON.stringify(payload));

    console.log("Login berhasil:", payload);
    return token;
  } catch (error) {
    console.error(
      "Login gagal:",
      error.response ? error.response.data.msg : error.message
    );
    return null;
  }
}

export default login;
