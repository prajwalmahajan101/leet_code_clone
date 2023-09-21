import React from "react";
import { DBProblem } from "@/utils/types/problem";

import { getProblems } from "@/firebase/Database/problem";

const useGetProblems = () => {
  const [problems, setProblems] = React.useState<DBProblem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error>();

  React.useEffect(() => {
    const fetchProblems = async () => {
      setLoading(true);
      setError(undefined);
      try {
        const temp = await getProblems();
        setProblems(temp);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProblems();
  }, []);

  return { problems, loading, error };
};

export default useGetProblems;
