import React from "react";
import TextField from "../../Atom/textField/textField";
const FormInputPassword = ({ formData, setFormData }) => {
  return (
    <div className="input-form flex flex-col items-center gap-4 flex-[1_0_0] self-stretch">
      <TextField
        inputLabel="Password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
        size="large"
        type="password"
      />
      <TextField
        inputLabel="Confirm Password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))
        }
        size="large"
        type="password"
      />
    </div>
  );
};

export default FormInputPassword;
