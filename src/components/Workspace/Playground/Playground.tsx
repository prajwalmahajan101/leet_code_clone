import React, { FC, useEffect, useState } from "react";

import Split from "react-split";

import PreferenceNav from "@/components/Workspace/Playground/PreferenceNav/PreferenceNav";
import CodeEditor from "@/components/Workspace/Playground/CodeEditor/CodeEditor";
import TestCases from "@/components/Workspace/Playground/TestCases/TestCases";
import EditorFooter from "@/components/Workspace/Playground/EditorFooter/EditorFooter";
import { Problem } from "@/utils/types/problem";
import useAuthUser from "@/hooks/authHooks/useAuthUser";
import { errorToast, loadingToastCreator } from "@/utils/toast/toast";
import { useRouter } from "next/router";
import { problems } from "@/utils/problems";
import { updateUserData } from "@/firebase/Database/user";
import { arrayUnion } from "@firebase/firestore";

type PlaygroundProps = {
  problem: Problem;
  onSuccess: () => void;
};

const Playground: FC<PlaygroundProps> = ({ problem, onSuccess }) => {
  const [userCode, setUserCode] = useState<string>(problem.starterCode);
  const [user] = useAuthUser();
  const {
    query: { pid },
  } = useRouter();

  useEffect(() => {
    const code = localStorage.getItem(`code-${pid}`);
    if (user) {
      setUserCode(code ? JSON.parse(code) : problem.starterCode);
    } else {
      setUserCode(problem.starterCode);
    }
  }, [pid, user, problem.starterCode]);

  const { startingLoading, loadedSuccessfully, errorWhileLoading } =
    loadingToastCreator("SubmissionToast");
  const handleSubmit = async () => {
    if (!user) {
      errorToast("Please Login To Submit Your Code");
      return;
    }
    startingLoading("Please We are Checking your Code with Test Cases.....");
    try {
      const userFuncCode = userCode.slice(
        userCode.indexOf(problem.starterFunctionName),
      );
      const cb = new Function(`return ${userFuncCode}`)();
      const handler = problems[pid as string].handlerFunction;

      if (typeof handler === "function") {
        const success = handler(cb);
        if (success) {
          loadedSuccessfully("Congratulations!! All test Cases passed...");
          await updateUserData(user.uid, { solvedProblems: arrayUnion(pid) });
          onSuccess();
        }
      }
    } catch (error: any) {
      if (error.message.startsWith("AssertionError [ERR_ASSERTION]")) {
        errorWhileLoading("Oops!! One/More TestCase(s) Failed");
      } else {
        errorWhileLoading(error.message);
      }
    }
  };

  const onChange = (value: string) => {
    setUserCode(value);
    localStorage.setItem(`code-${pid}`, JSON.stringify(value));
  };
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
          <CodeEditor starterCode={userCode} onChange={onChange} />
        </div>
        <div className="w-full px-5 overflow-auto">
          <TestCases examples={problem.examples} />
        </div>
      </Split>
      <EditorFooter onSubmit={handleSubmit} />
    </div>
  );
};

export default Playground;
