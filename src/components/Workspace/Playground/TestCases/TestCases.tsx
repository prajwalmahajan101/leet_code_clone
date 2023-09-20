import React, { FC, useState } from "react";
import TestCaseTab from "@/components/Workspace/Playground/TestCases/TestCaseTab/TestCaseTab";
import { Example } from "@/utils/types/problem";

type TestCasesProps = {
  examples: Example[];
};

const TestCases: FC<TestCasesProps> = ({ examples }) => {
  const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
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
        {examples.map((_, index) => (
          <TestCaseTab
            key={index}
            onActivateTestCase={() => {
              setActiveTestCaseId(index);
            }}
            isActive={activeTestCaseId === index}
          >{`Case ${index + 1}`}</TestCaseTab>
        ))}
      </div>
      <div className="font-semibold my-4">
        <p className="text-sm font-medium mt-4 text-white">Input:</p>
        <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
          {examples[activeTestCaseId].inputText}
        </div>
        <p className="text-sm font-medium mt-4 text-white">Output:</p>
        <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
          {examples[activeTestCaseId].outputText}
        </div>
      </div>
    </>
  );
};

export default TestCases;
