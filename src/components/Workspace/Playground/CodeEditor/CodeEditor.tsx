import React, { FC } from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";

type CodeEditorProps = {};

const CodeEditor: FC<CodeEditorProps> = () => {
  return (
    <CodeMirror
      value={"const a = 1;"}
      theme={vscodeDark}
      extensions={[javascript()]}
      style={{ fontSize: 16 }}
    />
  );
};

export default CodeEditor;
