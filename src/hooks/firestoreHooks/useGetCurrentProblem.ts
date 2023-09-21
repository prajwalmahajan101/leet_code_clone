import { DBProblem } from "@/utils/types/problem";
import { useEffect, useState } from "react";
import { getProblemById } from "@/firebase/Database/problem";

interface DifficultyMap {
  [key: string]: string;
}

export const difficultyMap: DifficultyMap = {
  Easy: "text-olive bg-olive",
  Medium: "text-dark-yellow bg-dark-yellow",
  Hard: "text-dark-pink bg-dark-pink",
};

const useGetCurrentProblem = (id: string) => {
  const [currentProblem, setProblem] = useState<DBProblem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [problemDifficultyClass, setProblemDifficultyClass] =
    useState<string>("");
  useEffect(() => {
    const fetchProblem = async () => {
      let problem = await getProblemById(id);
      if (problem) {
        setProblem(problem);
        setProblemDifficultyClass(difficultyMap[`${problem.difficulty}`]);
      }
      setLoading(false);
    };
    fetchProblem();
  }, [id]);
  return { currentProblem, loading, problemDifficultyClass };
};

export default useGetCurrentProblem;
