import React, { FC } from "react";
import { Problem } from "@/dummyData/problems";
import { BsCheckCircle } from "react-icons/bs";
import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";

type TableRowProps = {
  problem: Problem;
  isDark: boolean;
};

const TotalRow: FC<TableRowProps> = ({ problem, isDark }) => {
  const difficultyColor =
    problem.difficulty === "Easy"
      ? "text-dark-green-s"
      : problem.difficulty === "Medium"
      ? "text-dark-yellow"
      : "text-dark-pink";

  return (
    <tr className={`${isDark ? "" : "bg-dark-layer-1"}`}>
      <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
        <BsCheckCircle fontSize={"18"} width={"18"} />
      </th>
      <td className="px-6 py-4">
        <Link
          className="hover:text-blue-600 cursor-pointer"
          href={`/problems/${problem.id}`}
        >
          {problem.title}
        </Link>
      </td>
      <td className={`px-6 py-4 ${difficultyColor}`}>{problem.difficulty}</td>
      <td className="px-6 py-4">{problem.category}</td>
      <td className="px-6 py-4">
        {problem.videoId ? (
          <AiFillYoutube
            fontSize="24"
            className="cursor-pointer hover:text-red-700"
          />
        ) : (
          <p className="text-gray-400">Coming Soon</p>
        )}
      </td>
    </tr>
  );
};

export default TotalRow;
