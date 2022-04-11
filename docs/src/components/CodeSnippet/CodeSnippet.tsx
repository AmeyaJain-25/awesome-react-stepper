import codeSnippetCss from "./CodeSnippet.module.css";
import { ReactComponent as CopyIcon } from "../../assets/copy.svg";

const CodeSnippet = (props: any) => {
  const { code } = props;

  return (
    <div className={codeSnippetCss.codeSnippetComponent}>
      <code className={codeSnippetCss.codeSnippet}>{code}</code>
      <div
        className={codeSnippetCss.copyCode}
        onClick={() => navigator.clipboard.writeText(code)}
      >
        <CopyIcon title="copy" />
      </div>
    </div>
  );
};

export default CodeSnippet;
