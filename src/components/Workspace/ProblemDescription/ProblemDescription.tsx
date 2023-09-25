import React, { FC } from "react";
import { Problem } from "@/utils/types/problem";
import TestCase from "@/components/Workspace/ProblemDescription/TestCase/TestCase";
import useGetCurrentProblem from "@/hooks/firestoreHooks/useGetCurrentProblem";
import ProblemHighLights from "@/components/Workspace/ProblemDescription/ProblemHighLights/ProblemHighLights";
import HighlightLoadingSkeleton from "@/components/Skeletons/HighlightLoadingSkeleton";

type ProblemDescriptionProps = {
  problem: Problem;
  _solved: boolean;
};
const ProblemDescription: FC<ProblemDescriptionProps> = ({
  problem,
  _solved,
}) => {
  const {
    currentProblem,
    loading,
    incrementLike,
    decrementLike,
    incrementDislike,
    decrementDislike,
  } = useGetCurrentProblem(problem.id);
  return (
    <div className="bg-dark-layer-1">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden">
        <div
          className={
            "ml-2 bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"
          }
        >
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-medium">
                {problem.title}
              </div>
            </div>
            {/* HighLights */}
            {!loading && currentProblem && (
              <ProblemHighLights
                problem={currentProblem}
                _solved={_solved}
                updateFunction={{
                  incrementLike,
                  decrementLike,
                  incrementDislike,
                  decrementDislike,
                }}
              />
            )}
            {loading && <HighlightLoadingSkeleton />}

            {/* Problem Statement(paragraphs) */}
            <div className="text-white text-sm">
              <div
                dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
              />
            </div>

            {/* Examples */}
            <div className="mt-4">
              {problem.examples.map((example, idx) => (
                <TestCase example={example} idx={idx} key={example.id} />
              ))}
            </div>

            {/* Constraints */}
            <div className="my-5 pb-4">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul className="text-white ml-5  list-disc">
                <div
                  dangerouslySetInnerHTML={{ __html: problem.constraints }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
