import { apiData } from "../../../utils/apiData";
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
