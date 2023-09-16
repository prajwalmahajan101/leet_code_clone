import React, { FC } from "react";

import { problems } from "@/dummyData/problems";

import TableHead from "@/components/TableHead/TableHead";
import TableRow from "@/components/TableRow/TableRow";

type ProblemTableProps = {};

const tableColumns: string[] = [
  "Status",
  "Title",
  "Difficulty",
  "Category",
  "Solution",
];

const ProblemTable: FC<ProblemTableProps> = () => {
  return (
    <div className="relative overflow-x-auto mx-auto px-6 pb-10">
      <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
        <TableHead cols={tableColumns} />
        <tbody className="text-white">
          {problems.map((problem, idx) => {
            return (
              <TableRow
                problem={problem}
                isDark={idx % 2 == 1}
                key={problem.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemTable;
