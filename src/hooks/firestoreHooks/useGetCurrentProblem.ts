import { DBProblem } from "@/utils/types/problem";
import { useEffect, useState } from "react";
import { getProblemById } from "@/firebase/Database/problem";

const useGetCurrentProblem = (id: string) => {
  const [currentProblem, setProblem] = useState<DBProblem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const updateCurrentProblemsHighlights =
    (propertyName: "likes" | "dislikes") => (value: 1 | -1) => () => {
      setProblem((prevState) =>
        prevState
          ? {
              ...prevState,
              [propertyName]: prevState[propertyName] + value,
            }
          : prevState,
      );
    };

  const incrementLike = updateCurrentProblemsHighlights("likes")(1);
  const incrementDislike = updateCurrentProblemsHighlights("dislikes")(1);
  const decrementLike = updateCurrentProblemsHighlights("likes")(-1);
  const decrementDislike = updateCurrentProblemsHighlights("dislikes")(-1);

  useEffect(() => {
    const fetchProblem = async () => {
      let problem = await getProblemById(id);
      if (problem) {
        setProblem(problem);
      }
      setLoading(false);
    };
    fetchProblem();
  }, [id]);
  return {
    currentProblem,
    loading,
    incrementLike,
    incrementDislike,
    decrementLike,
    decrementDislike,
  };
};

export default useGetCurrentProblem;
