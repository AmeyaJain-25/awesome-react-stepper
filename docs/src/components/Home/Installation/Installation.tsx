import CodeSnippet from "../../CodeSnippet";
import Section from "../../Section";
import installationCss from "./Installation.module.css";

const Installation = () => {
  return (
    <Section title="Installation">
      <div id="getStarted" />
      <CodeSnippet code={`npm install react-multi-stepper`} />
      <p>Or</p>
      <CodeSnippet code={`yarn add react-multi-stepper`} />
    </Section>
  );
};

export default Installation;
