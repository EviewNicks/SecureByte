// src/App.jsx
import React from "react";
import ButtonVariant from "./Button";

import ArrowUp from "../icons/arrow/arrowUp";
import ArrowDown from "../icons/arrow/arrowDowns";
import ArrowLeft from "../icons/arrow/arrowLeft";
import ArrowRight from "../icons/arrow/arrowRight";

function Button() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 m-20">
      {/* Regular Buttons */}
      <div className="flex gap-4">
        <ButtonVariant
          text="Create Account"
          shape="Box" // atau "Circle"
          size="large"
          primary={true}
          withIconLeft={true}
          withIconRight={true}
        />

        <ButtonVariant
          text="Create Account"
          shape="Box" // atau "Circle"
          size="medium"
          primary={true}
          withIconLeft={false}
          withIconRight={true}
        />
        <ButtonVariant
          text="Create Account"
          shape="Box" // atau "Circle"
          size="small"
          primary={true}
          withIconLeft={true}
          withIconRight={false}
        />
      </div>

      {/* Circle Buttons */}
      <div className="flex gap-4">
        <ButtonVariant
          text="Create Account"
          shape="Circle" // atau "Circle"
          size="large"
          primary={false}
          withIconLeft={true}
          withIconRight={true}
        />
        <ButtonVariant
          text="Create Account"
          shape="Circle" // atau "Circle"
          size="medium"
          primary={false}
          withIconLeft={false}
          withIconRight={true}
        />
        <ButtonVariant
          text="Create Account"
          shape="Circle" // atau "Circle"
          size="small"
          primary={false}
          withIconLeft={false}
          withIconRight={false}
        />
      </div>

      {/* variant Buttons */}
      <ButtonVariant
        text="Download"
        shape="Box"
        size="large"
        primary={true}
        withIconLeft={<ArrowDown color="#FFF0D1" />}
        withIconRight={<ArrowUp color="#FFF0D1" />}
      />
      <ButtonVariant
        text="Previous"
        shape="Circle"
        size="medium"
        primary={false}
        withIconLeft={<ArrowLeft />}
      />
      <ButtonVariant
        text="Next"
        shape="Circle"
        size="medium"
        primary={true}
        withIconRight={<ArrowRight />}
      />
    </div>
  );
}

export default Button;
