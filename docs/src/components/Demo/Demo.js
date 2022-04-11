import React from "react";
import demoCss from "./Demo.module.css";
import { Stepper } from "react-awesome-stepper";
import CodeSnippet from "../CodeSnippet";
import Container from "../Container";

function Demo() {
  return (
    <Container>
      <div className={demoCss.demoParentDiv}>
        <div className={demoCss.demoDiv}>
          <Stepper
            onSubmit={() =>
              alert("Thank you for using React Awesome Stepper!!!")
            }
            submitBtn={<button className={demoCss.stepperBtn}>Submit</button>}
            continueBtn={<button className={demoCss.stepperBtn}>Next</button>}
            backBtn={<button className={demoCss.stepperBtn}>Back</button>}
            strokeColor="#17253975"
            fillStroke="#172539"
            activeColor="#172539"
            activeProgressBorder="2px solid #17253975"
          >
            <div className={demoCss.stepperSubDiv}>
              <h1>Welcome to React Awesome Stepper</h1>
            </div>
            <div className={demoCss.stepperSubDiv}>
              <h1>Add your content here!!!</h1>
            </div>
            <div className={demoCss.stepperSubDiv}>
              <h1>Thank you for using React Awesome Stepper</h1>
            </div>
          </Stepper>
        </div>
        <CodeSnippet
          code={`import { Stepper } from "react-awesome-stepper";

<Stepper
  strokeColor="#17253975"
  fillStroke="#172539"
  activeColor="#172539"
  activeProgressBorder="2px solid #17253975"
  submitBtn={<button className="stepperBtn">Submit</button>}
  continueBtn={<button className="stepperBtn">Next</button>}
  backBtn={<button className="stepperBtn">Back</button>}
  onSubmit={
    () => alert("Thank you for using React Awesome Stepper!!!")
  }
>
  <div className="stepperSubDiv">
    <h1>Welcome to React Awesome Stepper</h1>
  </div>
  <div className="stepperSubDiv">
    <h1>Add your content here!!!</h1>
  </div>
  <div className="stepperSubDiv">
    <h1>Thank you for using React Awesome Stepper</h1>
  </div>
</Stepper>`}
        />
      </div>
    </Container>
  );
}

export default Demo;
