import CodeSnippet from "../../CodeSnippet";
import Section from "../../Section";
import installationCss from "./Installation.module.css";

const Installation = () => {
  return (
    <Section title="Installation">
      <CodeSnippet code={`npm install react-awesome-stepper`} />
      <p>Or</p>
      <CodeSnippet code={`yarn add react-awesome-stepper`} />
    </Section>
  );
};

export default Installation;
