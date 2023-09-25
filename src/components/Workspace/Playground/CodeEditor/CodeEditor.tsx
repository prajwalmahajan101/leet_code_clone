import React, { FC } from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";

type CodeEditorProps = {
  starterCode: string;
  onChange: (value: string) => void;
};

const CodeEditor: FC<CodeEditorProps> = ({ starterCode, onChange }) => {
  return (
    <CodeMirror
      value={starterCode}
      theme={vscodeDark}
      onChange={onChange}
      extensions={[javascript()]}
      style={{ fontSize: 16 }}
    />
  );
};

export default CodeEditor;
