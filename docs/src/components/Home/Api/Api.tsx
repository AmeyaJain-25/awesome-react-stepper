import CodeSnippet from "../../CodeSnippet";
import Section from "../../Section";
import apiCss from "./Api.module.css";

const Api = () => {
  return (
    <Section title="API">
      <h4 className={apiCss.contentTitle}>Stepper</h4>
      <p className={apiCss.contentDesc}>
        <code>Stepper</code> is a component that renders a component containing
        a progress bar with the current active step and the total number of
        steps followed by the component of current active step provided. The
        order of steps will be as same as the order of children in{" "}
        <code>Stepper</code>.
      </p>
      <table className={apiCss.apiTable}>
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>showProgressBar</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              Hide the Progress bar by setting <code>showProgressBar</code> as{" "}
              <code>false</code>. If not provided, Progress Bar will be shown.
            </td>
          </tr>
          <tr>
            <td>
              <code>defaultActiveStep</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>1</code>
            </td>
            <td>
              Start your stepper from a particular step by setting{" "}
              <code>defaultActiveStep</code> counting from 1.
            </td>
          </tr>
          <tr>
            <td>
              <code>backBtn</code>
            </td>
            <td>
              <code>ReactNode</code>
            </td>
            <td>
              <code>-</code>
            </td>
            <td>Provide a custom button to navigate to previous step.</td>
          </tr>
          <tr>
            <td>
              <code>continueBtn</code>
            </td>
            <td>
              <code>ReactNode</code>
            </td>
            <td>
              <code>-</code>
            </td>
            <td>Provide a custom button to navigate to next step.</td>
          </tr>
          <tr>
            <td>
              <code>submitBtn</code>
            </td>
            <td>
              <code>ReactNode</code>
            </td>
            <td>
              <code>-</code>
            </td>
            <td>
              Provide a custom button that will appear at the last step of the
              Stepper.
            </td>
          </tr>
          <tr>
            <td>
              <code>onContinue</code>
            </td>
            <td>
              <code>(props) =&gt; void</code>
            </td>
            <td>
              <code>-</code>
            </td>
            <td>Trigger when the user clicks on the continue button.</td>
          </tr>
          <tr>
            <td>
              <code>onPrev</code>
            </td>
            <td>
              <code>(props) =&gt; void</code>
            </td>
            <td>
              <code>-</code>
            </td>
            <td>Trigger when the user clicks on the previous button.</td>
          </tr>
          <tr>
            <td>
              <code>onSubmit</code>
            </td>
            <td>
              <code>(props) =&gt; void</code>
            </td>
            <td>
              <code>-</code>
            </td>
            <td>
              Trigger when the user clicks the submit button at last step.
            </td>
          </tr>
          <tr>
            <td>
              <code>btnPos</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>space-between</code>
            </td>
            <td>
              Position of the buttons in the Stepper. <code>center</code> will
              display the buttons in the center of the Stepper.{" "}
              <code>flex-end</code> will display the buttons at the end of the
              Stepper and so on.
            </td>
          </tr>
          <tr>
            <td>
              <code>barWidth</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>200px</code>
            </td>
            <td>
              Width of the progress bar. <code>200px</code> will display the
              progress bar with 200px width.
            </td>
          </tr>
          <tr>
            <td>
              <code>strokeColor</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>#cdd3d8</code>
            </td>
            <td>
              Color of the progress bar. <code>#cdd3d8</code> will display the
              progress bar with the color of #cdd3d8.
            </td>
          </tr>
          <tr>
            <td>
              <code>fillStroke</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>#3a4047</code>
            </td>
            <td>Color of the progress bar up to the active step.</td>
          </tr>
          <tr>
            <td>
              <code>stroke</code>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>2</code>
            </td>
            <td>
              Width of the progress bar. <code>2</code> will display the
              progress bar with 2px width.
            </td>
          </tr>
          <tr>
            <td>
              <code>activeColor</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>#3A4047</code>
            </td>
            <td>Color of the active step circle.</td>
          </tr>
          <tr>
            <td>
              <code>activeProgressBorder</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>2px solid #f3f4f5</code>
            </td>
            <td>
              Border of the active step circle. <code>2px solid #f3f4f5</code>{" "}
              will display the active step circle with 2px solid border.
            </td>
          </tr>
          <tr>
            <td>
              <code>progressBarClassName</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>-</code>
            </td>
            <td>Class name of the progress bar.</td>
          </tr>
          <tr>
            <td>
              <code>contentBoxClassName</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>-</code>
            </td>
            <td>Class name of the container below the progress bar.</td>
          </tr>
          <tr>
            <td>
              <code>allowClickControl</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              Allow user to click the bar or stepper buttons to navigate to that
              step.
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

export default Api;
