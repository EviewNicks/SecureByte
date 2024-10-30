import React from "react";
import FlowLine from "./FlowLine";

const ExampleFlowLine = () => {
  return (
    <section className="flow-line-container flex flex-col">
      {/* Start Flow Line */}
      <FlowLine position="start" />

      {/* Middle Flow Line */}
      <FlowLine position="middle" />

      {/* End Flow Line */}
      <FlowLine position="end" />
    </section>
  );
};

export default ExampleFlowLine;
