import React, { FC } from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";

type CodeEditorProps = {
  starterCode: string;
  onChange: (value: string) => void;
  fontSize: string;
};

const CodeEditor: FC<CodeEditorProps> = ({
  starterCode,
  onChange,
  fontSize,
}) => {
  return (
    <CodeMirror
      value={starterCode}
      theme={vscodeDark}
      onChange={onChange}
      extensions={[javascript()]}
      style={{ fontSize: fontSize }}
    />
  );
};

export default CodeEditor;
