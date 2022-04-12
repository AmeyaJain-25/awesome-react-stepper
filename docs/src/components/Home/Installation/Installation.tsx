import CodeSnippet from "../../CodeSnippet";
import Section from "../../Section";
import installationCss from "./Installation.module.css";

const Installation = () => {
  return (
    <Section title="Installation">
      <CodeSnippet code={`npm install awesome-react-stepper`} />
      <p>Or</p>
      <CodeSnippet code={`yarn add awesome-react-stepper`} />
    </Section>
  );
};

export default Installation;
