import React, { FC } from "react";
import AppBar from "@/components/AppBar/AppBar";
import Workspace from "@/components/Workspace/Workspace";

type ProblemPageProps = {};

const ProblemPage: FC<ProblemPageProps> = () => {
  return (
    <div>
      <AppBar problemPage />
      <Workspace />
    </div>
  );
};

export default ProblemPage;
