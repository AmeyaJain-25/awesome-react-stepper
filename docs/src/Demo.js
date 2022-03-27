import React from "react";
import { MultiStepper } from "react-multi-stepper";

function Demo() {
  return (
    <MultiStepper
      barWidth="200px"
      // fillStroke="red"
      onSubmit={() => alert("Submitted")}
    >
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
    </MultiStepper>
  );
}

export default Demo;
