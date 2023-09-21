import React from "react";
import { DBProblem } from "@/utils/types/problem";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import firestore from "@/firebase/Database";

const useGetProblems = () => {
  const [problems, setProblems] = React.useState<DBProblem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error>();

  React.useEffect(() => {
    const getProblems = async () => {
      setLoading(true);
      setError(undefined);
      try {
        const q = query(
          collection(firestore, "problems"),
          orderBy("order", "asc"),
        );
        const querySnapshot = await getDocs(q);
        const temp: any[] = [];
        querySnapshot.forEach((doc) => {
          temp.push({ id: doc.id, ...doc.data() });
        });
        setProblems(temp);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    getProblems();
  }, []);

  return { problems, loading, error };
};

export default useGetProblems;
