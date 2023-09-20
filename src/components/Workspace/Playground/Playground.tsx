import React, { FC } from "react";

import Split from "react-split";

import PreferenceNav from "@/components/Workspace/Playground/PreferenceNav/PreferenceNav";
import CodeEditor from "@/components/Workspace/Playground/CodeEditor/CodeEditor";
import TestCases from "@/components/Workspace/Playground/TestCases/TestCases";
import EditorFooter from "@/components/Workspace/Playground/EditorFooter/EditorFooter";
import { Problem } from "@/utils/types/problem";

type PlaygroundProps = {
  problem: Problem;
};

const Playground: FC<PlaygroundProps> = ({ problem }) => {
  return (
    <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
      <PreferenceNav />
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[75, 25]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <CodeEditor starterCode={problem.starterCode} />
        </div>
        <div className="w-full px-5 overflow-auto">
          <TestCases examples={problem.examples} />
        </div>
      </Split>
      <EditorFooter />
    </div>
  );
};

export default Playground;
