import { DBProblem } from "@/utils/types/problem";
import React, { FC, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { TiStar, TiStarOutline } from "react-icons/ti";
import useGetUserDataOfProblem from "@/hooks/firestoreHooks/useGetUserDataOfProblem";
import { errorToast, loadingToastCreator } from "@/utils/toast/toast";
import useAuthUser from "@/hooks/authHooks/useAuthUser";
import likeProblem from "@/utils/Transactions/likeTransactions";
import dislikeProblem from "@/utils/Transactions/dislikeTransactions";
import starTransaction from "@/utils/Transactions/starTransactions";

type ProblemHighLightsProps = {
  problem: DBProblem;
  updateFunction: {
    incrementLike: () => void;
    decrementLike: () => void;
    incrementDislike: () => void;
    decrementDislike: () => void;
  };
};

const ProblemHighLights: FC<ProblemHighLightsProps> = ({
  problem,
  updateFunction,
}) => {
  const [updating, setUpdating] = useState<boolean>(false);

  const {
    liked,
    disliked,
    starred,
    solved,
    toggleLike,
    toggleDislike,
    toggleStarred,
    toggleSolved,
  } = useGetUserDataOfProblem(problem.id);

  const { incrementLike, decrementLike, incrementDislike, decrementDislike } =
    updateFunction;

  const [user] = useAuthUser();
  const starringToast = loadingToastCreator("StarringToast");
  const handleLike = async () => {
    if (!user) {
      errorToast("You Must Be Logged In To Like a Problem");
      return;
    }
    if (updating) return;
    setUpdating(true);
    try {
      await likeProblem({
        userId: user.uid,
        problemId: problem.id,
        liked,
        disliked,
        incrementLike,
        decrementLike,
        decrementDislike,
        toggleLike,
        toggleDislike,
      });
    } catch (error) {
      console.log(error);
    }
    setUpdating(false);
  };

  const handleDislike = async () => {
    if (!user) {
      errorToast("You Must Be Logged In To Like a Problem");
      return;
    }
    if (updating) return;
    setUpdating(true);
    try {
      await dislikeProblem({
        userId: user.uid,
        problemId: problem.id,
        liked,
        disliked,
        incrementDislike,
        decrementLike,
        decrementDislike,
        toggleLike,
        toggleDislike,
      });
    } catch (err) {
      console.log(err);
    }
    setUpdating(false);
  };

  const handleStar = async () => {
    if (!user) {
      errorToast("You Must Be Logged In To Like a Problem");
      return;
    }
    if (updating) return;
    setUpdating(true);
    try {
      await starTransaction({
        userId: user.uid,
        problemId: problem.id,
        starred,
        toggleStarred,
      });
    } catch (err) {
      console.log(err);
    }
    setUpdating(false);
  };

  return (
    <div className="flex items-center mt-3">
      <div
        className={`difficulty-${problem.difficulty.toLowerCase()} inline-block rounded-[21px] px-2.5 py-1 text-xs font-medium capitalize `}
      >
        {problem.difficulty}
      </div>
      <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
        {solved && <BsCheck2Circle />}
      </div>
      <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
        {!updating && (
          <AiFillLike
            className={liked ? "text-dark-blue-s" : ""}
            onClick={handleLike}
          />
        )}
        {updating && <AiOutlineLoading3Quarters className="animate-spin" />}
        <span className="text-xs">{problem.likes}</span>
      </div>
      <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
        {!updating && (
          <AiFillDislike
            className={disliked ? "text-dark-pink" : ""}
            onClick={handleDislike}
          />
        )}
        {updating && <AiOutlineLoading3Quarters className="animate-spin" />}
        <span className="text-xs">{problem.dislikes}</span>
      </div>
      <div className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
        {!updating && !starred && <TiStarOutline onClick={handleStar} />}
        {!updating && starred && (
          <TiStar className="text-brand-orange" onClick={handleStar} />
        )}
        {updating && <AiOutlineLoading3Quarters className="animate-spin" />}
      </div>
    </div>
  );
};

export default ProblemHighLights;
