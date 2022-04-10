import CodeSnippet from "../../CodeSnippet";
import Section from "../../Section";
import quickStartCss from "./QuickStart.module.css";

const QuickStart = () => {
  return (
    <Section title="QuickStart">
      <h4 className={quickStartCss.contentTitle}>Import And Use</h4>
      <p className={quickStartCss.contentDesc}>
        Multi Stepper takes each{" "}
        <span className={quickStartCss.highlight}>children</span> as a{" "}
        <span className={quickStartCss.highlight}>step</span>. Number of
        children inside the Multi Stepper will be the number of steps and can be
        shown with the progress bar. Also, the progress bar can be hidden by
        setting the{" "}
        <code className={quickStartCss.highlight}>showProgressBar</code>{" "}
        attribute to <code className={quickStartCss.highlight}>false</code>.
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
