import { Example } from "@/utils/types/problem";
import React, { FC } from "react";

type TestCaseProps = {
  example: Example;
  idx: number;
};

const TestCase: FC<TestCaseProps> = ({ example, idx }) => {
  return (
    <div>
      <p className="font-medium text-white ">Example {idx + 1}: </p>
      {example.img && <img src={example.img} alt="" className={"mt-2"} />}
      <div className="example-card">
        <pre>
          <strong className="text-white">Input: </strong> {example.inputText}
          <br />
          <strong>Output:</strong> {example.outputText}
          <br />
          {example.explanation && (
            <>
              <strong>Explanation:</strong>
              {example.explanation}
            </>
          )}
        </pre>
      </div>
    </div>
  );
};

export default TestCase;
