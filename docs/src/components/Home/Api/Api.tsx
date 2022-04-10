import Section from "../../Section";
import apiCss from "./Api.module.css";
import { apiData } from "../../../utils/apiData";

const Api = () => {
  return (
    <Section title="API">
      <h4 className={apiCss.contentTitle}>Multi Stepper</h4>
      <p className={apiCss.contentDesc}>
        <code>MultiStepper</code> is a component that renders a component
        containing a progress bar highlighting the current active step. Below
        the progress bar the active step component is rendered. The order of
        steps will be as same as the order of children in{" "}
        <code>MultiStepper</code>.
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
          {apiData.map(
            ({ key, property, type, default: defaultValue, description }) => (
              <tr key={key}>
                <td>
                  <code dangerouslySetInnerHTML={{ __html: property }} />
                </td>
                <td>
                  <code dangerouslySetInnerHTML={{ __html: type }} />
                </td>
                <td>
                  <code dangerouslySetInnerHTML={{ __html: defaultValue }} />
                </td>
                <td dangerouslySetInnerHTML={{ __html: description }} />
              </tr>
            )
          )}
        </tbody>
      </table>
    </Section>
  );
};

export default Api;
