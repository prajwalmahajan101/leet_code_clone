import React, { FC } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import { useRouter } from "next/router";
import { problems } from "@/utils/problems";

type ProblemsNavigatorProps = {};
const ProblemsNavigator: FC<ProblemsNavigatorProps> = ({}) => {
  const router = useRouter();
  const { pid } = router.query;
  const handleChangeProblem =
    (isForward: boolean = true) =>
    async () => {
      const problem = problems[pid as string];
      const direction = isForward ? 1 : -1;
      const newProblemOrder = problem.order + direction;
      const problemsKeys = Object.keys(problems);
      let nextProblemKey = problemsKeys.find(
        (key) => problems[key].order === newProblemOrder,
      );
      if (isForward && !nextProblemKey) {
        nextProblemKey = problemsKeys.find((key) => problems[key].order === 1);
      } else if (!isForward && !nextProblemKey) {
        nextProblemKey = problemsKeys.find(
          (key) => problems[key].order === problemsKeys.length,
        );
      }
      await router.push(`/problems/${nextProblemKey}`);
    };

  const nextProblem = handleChangeProblem();
  const prevProblem = handleChangeProblem(false);

  return (
    <div className="flex items-center gap-4 flex-1 justify-center">
      <div
        className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
        onClick={prevProblem}
      >
        <FaChevronLeft />
      </div>
      <Link
        href="/"
        className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8  cursor-pointer"
      >
        <div>
          <BsList />
        </div>
        <p>Problem List</p>
      </Link>
      <div
        className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
        onClick={nextProblem}
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default ProblemsNavigator;
