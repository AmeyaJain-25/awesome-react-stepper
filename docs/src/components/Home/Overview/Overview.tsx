import Section from "../../Section";
import overviewCss from "./Overview.module.css";

const Overview = () => {
  return (
    <Section title="Overview">
      <p className={overviewCss.overviewContent}>
        React Multi-Stepper is a component library for building highly
        customizable multi step component. This library helps you to break the
        process of a form or flow into certain steps with availability of
        progress bars, customizable action buttons, responsive design and
        developer friendly library. You can hide/unhide progress bar as per your
        needs. Action buttons are also completely replacable with your theme.
        Hence, a perfect solution for your stepper functionality.
      </p>
    </Section>
  );
};

export default Overview;
