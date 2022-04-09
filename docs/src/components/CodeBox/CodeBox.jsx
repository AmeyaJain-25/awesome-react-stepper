import codeBoxCss from "./CodeBox.module.css";
import { ReactComponent as CopyIcon } from "../../assets/copy.svg";
import SyntaxHighlighter from "react-syntax-highlighter";

const CodeBox = (props) => {
  const { code } = props;

  return (
    <div className={codeBoxCss.codeSnippetComponent}>
      <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
      <div
        className={codeBoxCss.copyCode}
        onClick={() => navigator.clipboard.writeText(code)}
        title="copy"
      >
        <CopyIcon />
      </div>
    </div>
  );
};

export default CodeBox;
