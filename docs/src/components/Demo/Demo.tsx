import React from 'react';
import demoCss from './Demo.module.css';
import Stepper from 'awesome-react-stepper';
import CodeSnippet from '../CodeSnippet';
import Container from '../Container';

function Demo() {
  return (
    <Container>
      <div className={demoCss.demoParentDiv}>
        <div className={demoCss.demoDiv}>
          <Stepper
            onSubmit={(step) => alert(`Thank you!!! Final Step -> ${step}`)}
            submitBtn={<button className={demoCss.stepperBtn}>Submit</button>}
            continueBtn={<button className={demoCss.stepperBtn}>Next</button>}
            backBtn={<button className={demoCss.stepperBtn}>Back</button>}
            strokeColor="#17253975"
            fillStroke="#172539"
            activeColor="#172539"
            activeProgressBorder="2px solid #17253975"
          >
            <div className={demoCss.stepperSubDiv}>
              <h1>Welcome to Awesome React Stepper</h1>
            </div>
            <div className={demoCss.stepperSubDiv}>
              <h1>Add your content here!!!</h1>
            </div>
            <div className={demoCss.stepperSubDiv}>
              <h1>Thank you for using Awesome React Stepper</h1>
            </div>
          </Stepper>
        </div>
        <CodeSnippet
          code={`import Stepper from "awesome-react-stepper";

<Stepper
  strokeColor="#17253975"
  fillStroke="#172539"
  activeColor="#172539"
  activeProgressBorder="2px solid #17253975"
  submitBtn={<button className="stepperBtn">Submit</button>}
  continueBtn={<button className="stepperBtn">Next</button>}
  backBtn={<button className="stepperBtn">Back</button>}
  onSubmit={
    (step) => alert(\`Thank you!!! Final Step -> \${step}\`)
  }
>
  <div className="stepperSubDiv">
    <h1>Welcome to Awesome React Stepper</h1>
  </div>
  <div className="stepperSubDiv">
    <h1>Add your content here!!!</h1>
  </div>
  <div className="stepperSubDiv">
    <h1>Thank you for using Awesome React Stepper</h1>
  </div>
</Stepper>`}
        />
        <h1 className={demoCss.cssCode}>CSS code</h1>
        <CodeSnippet
          code={`.stepperSubDiv {
  margin: 1.4em;
  background: #172539;
  border-radius: 12px;
  padding: 1.4em;
  color: #63b38f;
}

.stepperSubDiv h1 {
  font-weight: 500;
  text-align: center;
  color: #70cea2;
}

.stepperBtn {
  cursor: pointer;
  outline: none;
  box-shadow: none;
  border: none;
  background: #172539;
  color: #63b38f;
  border-radius: 12px;
  padding: 0.5em 1.4em;
  font-size: 1.2em;
  font-weight: 500;
  margin: 1.4em;
}`}
        />
      </div>
    </Container>
  );
}

export default Demo;
