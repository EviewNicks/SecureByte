import React from "react";
import TextField from "../../Atom/textField/textField";

const FormInputCreateAccount = ({ formData, setFormData }) => {
  return (
    <div className="input-form flex flex-col items-center flex-1 self-stretch">
      <TextField
        inputLabel="Nama Mahasiswa"
        placeholder="Enter Nama Mahasiswa"
        value={formData.username}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, username: e.target.value }))
        }
        size="large"
      />
      <TextField
        inputLabel="NIM Mahasiswa"
        placeholder="Enter NIM Mahasiswa"
        value={formData.nim}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, nim: e.target.value }))
        }
        size="large"
      />
      <TextField
        inputLabel="Prodi Mahasiswa"
        placeholder="Enter Prodi Mahasiswa"
        value={formData.prodi}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, prodi: e.target.value }))
        }
        size="large"
      />
      <div className="text-form flex justify-between items-center self-stretch gap-4">
        <TextField
          inputLabel="Kelas Mahasiswa"
          placeholder="Enter Kelas"
          value={formData.kelas}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, kelas: e.target.value }))
          }
          size="large"
        />
        <TextField
          inputLabel="Tahun"
          placeholder="Enter Tahun"
          value={formData.tahun}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, tahun: e.target.value }))
          }
          size="large"
        />
      </div>
    </div>
  );
};

export default FormInputCreateAccount;
