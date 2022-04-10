import CodeSnippet from "../../CodeSnippet";
import Section from "../../Section";
import quickStartCss from "./QuickStart.module.css";

const QuickStart = () => {
  return (
    <Section title="QuickStart">
      <h4 className={quickStartCss.contentTitle}>Import And Use</h4>
      <p className={quickStartCss.contentDesc}>
        The children of MultiStepForm will be counted as each step of the
        Stepper. The progressBar can be hidden by setting the showProgressBar
        prop to false.
      </p>
      <CodeSnippet
        code={`import { MultiStepper } from "react-multi-stepper";

<MultiStepper>
  <div className="stepperSubDiv">
    <h1>Welcome to React Multi Stepper</h1>
  </div>
  <div className="stepperSubDiv">
    <h1>Add your content here!!!</h1>
  </div>
  <div className="stepperSubDiv">
    <h1>Thank you for using React Multi Stepper</h1>
  </div>
</MultiStepper>
`}
      />
    </Section>
  );
};

export default QuickStart;
