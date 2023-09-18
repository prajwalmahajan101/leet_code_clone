import React, { FC } from "react";
import Split from "react-split";
import ProblemDescription from "@/components/Workspace/ProblemDescription/ProblemDescription";
import Playground from "@/components/Workspace/Playground/Playground";

type WorkspaceProps = {};
const Workspace: FC<WorkspaceProps> = ({}) => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription />
      <Playground />
    </Split>
  );
};

export default Workspace;
