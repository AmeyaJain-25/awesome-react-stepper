import React from "react";
import demoCss from "./Demo.module.css";
import { MultiStepper } from "react-multi-stepper";
import CodeSnippet from "../CodeSnippet";

function Demo() {
  return (
    <div className={demoCss.demoParentDiv}>
      <div className={demoCss.demoDiv}>
        <MultiStepper
          onSubmit={() => alert("Thank you for using React Multi Stepper!!!")}
          submitBtn={<button className={demoCss.stepperBtn}>Submit</button>}
          continueBtn={<button className={demoCss.stepperBtn}>Next</button>}
          backBtn={<button className={demoCss.stepperBtn}>Back</button>}
          strokeColor="#17253975"
          fillStroke="#172539"
          activeColor="#172539"
          activeProgressBorder="2px solid #17253975"
        >
          <div className={demoCss.stepperSubDiv}>
            <h1>Welcome to React Multi Stepper</h1>
          </div>
          <div className={demoCss.stepperSubDiv}>
            <h1>Add your content here!!!</h1>
          </div>
          <div className={demoCss.stepperSubDiv}>
            <h1>Thank you for using React Multi Stepper</h1>
          </div>
        </MultiStepper>
      </div>
      <CodeSnippet
        code={`<MultiStepper
  onSubmit={() => alert("Thank you for using React Multi Stepper!!!")}
  submitBtn={<button className="stepperBtn">Submit</button>}
  continueBtn={<button className="stepperBtn">Next</button>}
  backBtn={<button className="stepperBtn">Back</button>}
  strokeColor="#17253975"
  fillStroke="#172539"
  activeColor="#172539"
  activeProgressBorder="2px solid #17253975"
>
  <div className="stepperSubDiv">
    <h1>Welcome to React Multi Stepper</h1>
  </div>
  <div className="stepperSubDiv">
    <h1>Add your content here!!!</h1>
  </div>
  <div className="stepperSubDiv">
    <h1>Thank you for using React Multi Stepper</h1>
  </div>
</MultiStepper>`}
      />
    </div>
  );
}

export default Demo;
