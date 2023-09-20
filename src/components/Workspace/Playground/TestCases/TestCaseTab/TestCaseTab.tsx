import React, { FC, HTMLAttributes } from "react";

type TestCaseTabProps = {
  onActivateTestCase: () => void;
  isActive: boolean;
} & HTMLAttributes<any>;
const TestCaseTab: FC<TestCaseTabProps> = ({
  children,
  onActivateTestCase,
  isActive,
}) => {
  return (
    <div
      className="mr-2 items-start mt-2 text-white"
      onClick={onActivateTestCase}
    >
      <div className="flex flex-wrap items-center gap-y-4">
        <div
          className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
              hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap ${
                isActive ? "text-white" : "text-gray-500"
              }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default TestCaseTab;
