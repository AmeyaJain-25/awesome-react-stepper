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
        code={`
import MultiStepForm from "react-multi-step-form";

          <MultiStepForm showProgessBar>
            <div>Step 1</div>
            <div>Step 2</div>
            <div>Step 3</div>
          </MultiStepForm>`}
      />
    </Section>
  );
};

export default QuickStart;
