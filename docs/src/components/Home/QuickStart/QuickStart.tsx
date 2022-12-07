import CodeSnippet from '../../CodeSnippet';
import Section from '../../Section';
import quickStartCss from './QuickStart.module.css';

const QuickStart = () => {
  return (
    <Section title="QuickStart">
      <h4 className={quickStartCss.contentTitle}>Import And Use</h4>
      <p className={quickStartCss.contentDesc}>
        Stepper takes each{' '}
        <span className={quickStartCss.highlight}>children</span> as a{' '}
        <span className={quickStartCss.highlight}>step</span>. Number of
        children inside the Stepper will be the number of steps and can be shown
        with the progress bar. Also, the progress bar can be hidden by setting
        the <code className={quickStartCss.highlight}>showProgressBar</code>{' '}
        attribute to <code className={quickStartCss.highlight}>false</code>.
      </p>
      <CodeSnippet
        code={`import Stepper from "awesome-react-stepper";

<Stepper>
  <div>
    <h1>Welcome to Awesome React Stepper</h1>
  </div>
  <div>
    <h1>Add your content here!!!</h1>
  </div>
  <div>
    <h1>Thank you for using Awesome React Stepper</h1>
  </div>
</Stepper>
`}
      />
    </Section>
  );
};

export default QuickStart;
