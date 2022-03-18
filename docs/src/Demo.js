import React from "react";
import { MultiStepper } from "react-multi-stepper";

function Demo() {
  return (
    <MultiStepper
      barWidth="200px"
      fillStroke="red"
      submitBtn={<button onClick={() => alert("Hi")}>Send</button>}
      onSubmit={() => alert("Submitted")}
    >
      <div>Hi</div>
      <div>Hi</div>
      <div>Hi</div>
    </MultiStepper>
  );
}

export default Demo;
