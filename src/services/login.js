import axios from "axios";

// URL login API
const LOGIN_URL = "http://localhost:3000/api/login";

// Fungsi untuk mengirim request login ke backend
async function login(email, password) {
  try {
    // Mengirim permintaan POST ke endpoint login dengan data email dan password
    const response = await axios.post(LOGIN_URL, {
      email: email,
      password: password,
    });
    
    // Mendapatkan token dari response
    const token = response.data.token;
    
    // Menyimpan token dalam localStorage atau sesi (opsional)
    localStorage.setItem("token", token);

    console.log("Login berhasil:", token);
    return token;
  } catch (error) {
    console.error("Login gagal:", error.response ? error.response.data.msg : error.message);
    return null;
  }
}


// Cara menggunakan fungsi login
// login("user@example.com", "yourpassword")
//   .then(token => {
//     console.log("Token:", token);
//   })
//   .catch(error => {
//     console.error("Error:", error.message);
//   });

export default login;
