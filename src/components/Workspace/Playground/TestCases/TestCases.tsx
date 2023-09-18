import React, { FC } from "react";
import TestCaseTab from "@/components/Workspace/Playground/TestCases/TestCaseTab/TestCaseTab";

type TestCasesProps = {};

const TestCases: FC<TestCasesProps> = ({}) => {
  return (
    <>
      <div className="flex h-10 items-center space-x-6">
        <div className="relative flex h-full flex-col justify-center cursor-pointer">
          <div className="text-sm font-medium leading-5 text-white">
            Testcases
          </div>
          <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
        </div>
      </div>
      <div className="flex">
        {/* Test Case 1*/}
        <TestCaseTab>Case 1</TestCaseTab>

        {/* Test Case 2*/}
        <TestCaseTab>Case 2</TestCaseTab>

        {/* Test Case 3*/}
        <TestCaseTab>Case 3</TestCaseTab>
      </div>
      <div className="font-semibold my-4">
        <p className="text-sm font-medium mt-4 text-white">Input:</p>
        <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
          nums: [2,7,11,15], target: 9
        </div>
        <p className="text-sm font-medium mt-4 text-white">Output:</p>
        <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
          [0,1]
        </div>
      </div>
    </>
  );
};

export default TestCases;
