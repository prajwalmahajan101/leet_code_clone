import React, { FC } from "react";
import AppBar from "@/components/AppBar/AppBar";

type ProblemPageProps = {};

const ProblemPage: FC<ProblemPageProps> = () => {
  return (
    <div>
      <AppBar problemPage />
      <h1>Problem Page</h1>
    </div>
  );
};

export default ProblemPage;
