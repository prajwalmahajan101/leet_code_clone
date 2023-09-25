import React, { FC } from "react";
import AppBar from "@/components/AppBar/AppBar";
import Workspace from "@/components/Workspace/Workspace";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";

type ProblemPageProps = {
  problem: Problem;
};

const ProblemPage: FC<ProblemPageProps> = ({ problem }) => {
  return (
    <div>
      <AppBar problemPage />
      <Workspace problem={problem} />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(problems).map((key) => ({ params: { pid: key } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { pid: string } }) {
  const { pid } = params;
  const problem = problems[pid];

  if (!problem) {
    return {
      notFound: true,
    };
  }

  problem.handlerFunction = problem.handlerFunction.toString();

  return {
    props: {
      problem,
    },
  };
}

export default ProblemPage;
