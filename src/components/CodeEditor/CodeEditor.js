import React from "react";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";

const CodeEditor = ({ id, onChange }) => {
  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      onChange={onChange}
      name={id}
      width={"100%"}
      height={"100%"}
      showPrintMargin={false}
      setOptions={{
        useWorker: false,
        showLineNumbers: true,
        tabSize: 2
      }}
    />
  );
};

export default CodeEditor;
