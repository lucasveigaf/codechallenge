import React from "react";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/tomorrow";

const languages = ["javascript", "java", "python", "ruby"];
languages.forEach(lang => {
  require(`brace/mode/${lang}`);
});

const CodeEditor = ({ id, onChange, language, value }) => {
  return (
    <AceEditor
      mode={language}
      theme="tomorrow"
      onChange={onChange}
      name={id}
      width={"100%"}
      height={"100%"}
      value={value}
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
