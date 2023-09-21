import { DBProblem } from "@/utils/types/problem";
import React, { FC } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { TiStarOutline } from "react-icons/ti";

type ProblemHighLightsProps = {
  problem: DBProblem;
  difficultyClass: string;
};

const ProblemHighLights: FC<ProblemHighLightsProps> = ({
  problem,
  difficultyClass,
}) => {
  return (
    <div className="flex items-center mt-3">
      <div
        className={`${difficultyClass} inline-block rounded-[21px] bg-opacity-[.25] px-2.5 py-1 text-xs font-medium capitalize `}
      >
        {problem.difficulty}
      </div>
      <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
        <BsCheck2Circle />
      </div>
      <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
        <AiFillLike />
        <span className="text-xs">{problem.likes}</span>
      </div>
      <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
        <AiFillDislike />
        <span className="text-xs">{problem.dislikes}</span>
      </div>
      <div className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
        <TiStarOutline />
      </div>
    </div>
  );
};

export default ProblemHighLights;
