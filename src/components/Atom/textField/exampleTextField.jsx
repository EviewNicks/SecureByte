import React from "react";
import TextField from "./textField";

const TextFieldExample = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-10 p-10">
      {/* TextField Size: Large, Status: Success */}
      <>
        {" "}
        <h2 className="text-xl font-bold mb-2">Large TextField (Success)</h2>
        <TextField
          size="large"
          status="success"
          label={true}
          placeholder="Enter your name"
          inputLabel="Name"
          inputStatus="Looks good!"
        />
      </>

      {/* TextField Size: Medium, Status: Warning */}
      <>
        <h2 className="text-xl font-bold mb-2">Medium TextField (Warning)</h2>
        <TextField
          size="medium"
          status="warning"
          label={true}
          placeholder="Enter your password"
          inputLabel="Password"
          inputStatus="Warning: Weak password"
        />
      </>

      {/* TextField Size: Small, Status: Error */}
      <>
        <h2 className="text-xl font-bold mb-2">Small TextField (Error)</h2>
        <TextField
          size="small"
          status="error"
          label={true}
          placeholder="Enter your email"
          inputLabel="Email"
          inputStatus="Invalid email!"
        />
      </>

      {/* TextField Size: TextArea, Status: Normal */}
      <>
        <h2 className="text-xl font-bold mb-2">TextArea (Normal)</h2>
        <TextField
          size="textarea"
          status="normal"
          label={false}
          placeholder="Enter your message"
        />
      </>

      {/* TextField Size: Medium, Status: Success, No Label */}
      <>
        <h2 className="text-xl font-bold mb-2">
          Medium TextField (Success, No Label)
        </h2>
        <TextField
          size="medium"
          status="success"
          label={false}
          placeholder="Enter your phone number"
          inputStatus="Looks good!"
        />
      </>

      {/* TextField Size: Small, Status: Warning, No Status */}
      <>
        <h2 className="text-xl font-bold mb-2">
          Small TextField (Warning, No Status)
        </h2>
        <TextField
          size="small"
          status="warning"
          label={true}
          placeholder="Enter your city"
          inputLabel="City"
          inputStatus=""
        />
      </>
    </div>
  );
};

export default TextFieldExample;
