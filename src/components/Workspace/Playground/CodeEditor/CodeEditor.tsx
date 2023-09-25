import React, { FC } from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";

type CodeEditorProps = {
  starterCode: string;
};

const CodeEditor: FC<CodeEditorProps> = ({ starterCode }) => {
  return (
    <CodeMirror
      value={starterCode}
      theme={vscodeDark}
      extensions={[javascript()]}
      style={{ fontSize: 16 }}
    />
  );
};

export default CodeEditor;
