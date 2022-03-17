import codeSnippetCss from "./CodeSnippet.module.css";

const CodeSnippet = (props: any) => {
  const { code } = props;

  return (
    <div className={codeSnippetCss.codeSnippetComponent}>
      <code className={codeSnippetCss.codeSnippet}>{code}</code>
      <span className={codeSnippetCss.copyCode}>Copy</span>
    </div>
  );
};

export default CodeSnippet;
