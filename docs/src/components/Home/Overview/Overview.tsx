import Section from "../../Section";
import overviewCss from "./Overview.module.css";

const Overview = () => {
  return (
    <Section title="Overview">
      <p className={overviewCss.overviewContent}>
        Awesome React Stepper is a component library for building highly
        customizable multi stepped component. This library helps you to break
        the process of a form or flow into certain steps with availability of
        progress bars, customizable action buttons, responsiveness and developer
        friendly library. You can hide/unhide progress bar as per your needs.
        Action buttons can also be replaced with your theme and requirement.
        Hence, a perfect solution for your stepper functionality.
      </p>
    </Section>
  );
};

export default Overview;
