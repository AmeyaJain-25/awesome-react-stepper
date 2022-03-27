import previewCss from "./Preview.module.css";
import Section from "../../Section";
import { MultiStepper } from "react-multi-stepper";

const Preview = () => {
  return (
    <Section title="Preview">
      <div className={previewCss.previewDiv}>
        <MultiStepper
          onSubmit={() => alert("Thank you for using React Multi Stepper!!!")}
          submitBtn={<button className={previewCss.stepperBtn}>Submit</button>}
          continueBtn={<button className={previewCss.stepperBtn}>Next</button>}
          backBtn={<button className={previewCss.stepperBtn}>Back</button>}
          strokeColor="#17253975"
          fillStroke="#172539"
          activeColor="#172539"
          activeProgressBorder="2px solid #17253975"
        >
          <div className={previewCss.stepperSubDiv}>
            <h1>Welcome to React Multi Stepper &#128591;</h1>
            <h2>See the highlights on NEXT screen &#128073;</h2>
          </div>
          <div className={previewCss.stepperSubDiv}>
            <h1>Highlights</h1>
            <ul>
              <li>Easy to use</li>
              <li>Highly Customizable Component</li>
              <li>Developer Friendly</li>
              <li>Completely Responsive</li>
            </ul>
          </div>
          <div className={previewCss.stepperSubDiv}>
            <h2>Thank you for using React Multi Stepper</h2>
          </div>
        </MultiStepper>
      </div>
    </Section>
  );
};

export default Preview;
