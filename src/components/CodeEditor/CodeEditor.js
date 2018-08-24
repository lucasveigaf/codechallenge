import React from "react";
import AceEditor from "react-ace";
import "brace/theme/tomorrow";

const languages = ["csharp", "elixir", "ruby", "java"];
languages.forEach(lang => {
  require(`brace/mode/${lang}`);
});

/**
 * It renders the code editor, filling 100% of it's available area.
 * @param {Object} props
 * @param {String} props.language - The language to be used for syntax highlighting and
 * other features of the Ace Editor.
 * @param {Function} props.onChange - Callback function for the editor's content changes.
 * It sends back the current editor's content.
 * @param {String} props.id - Id to be used for the html element.
 * @param {String} props.value - It is a controlled component, so we set the editor's value.
 */
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
