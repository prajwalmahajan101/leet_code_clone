import React, { FC } from "react";
import { DBProblem } from "@/utils/types/problem";
import { BsCheckCircle } from "react-icons/bs";
import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";

type TableRowProps = {
  problem: DBProblem;
  isDark: boolean;
  openYoutubePlayer: (videoId: string) => void;
  solved: boolean;
};

const TotalRow: FC<TableRowProps> = ({
  problem,
  isDark,
  openYoutubePlayer,
  solved,
}) => {
  const difficultyColor =
    problem.difficulty === "Easy"
      ? "text-dark-green-s"
      : problem.difficulty === "Medium"
      ? "text-dark-yellow"
      : "text-dark-pink";

  return (
    <tr className={`${isDark ? "" : "bg-dark-layer-1"}`}>
      <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
        {solved && <BsCheckCircle fontSize={"18"} width={"18"} />}
      </th>
      <td className="px-6 py-4">
        <Link
          className="hover:text-blue-600 cursor-pointer"
          href={problem.link ? `${problem.link}` : `/problems/${problem.id}`}
          target={problem.link ? "_blank" : undefined}
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
            className="cursor-pointer hover:text-red-600"
            onClick={() => {
              if (problem.videoId) openYoutubePlayer(problem.videoId);
            }}
          />
        ) : (
          <p className="text-gray-400">Coming Soon</p>
        )}
      </td>
    </tr>
  );
};

export default TotalRow;
