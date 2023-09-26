import useAuthUser from "@/hooks/authHooks/useAuthUser";
import { useEffect, useState } from "react";
import { getUser } from "@/firebase/Database/user";
import { User } from "@firebase/auth";

const useGetUserSolvedProblems = () => {
  const [user] = useAuthUser();
  const [solvedProblems, setSolvedProblems] = useState<string[]>([]);

  const isSolved = (problemId: string) => {
    return solvedProblems.includes(problemId);
  };
  useEffect(() => {
    const getSolvedProblems = async (user: User) => {
      const userDoc = await getUser(user.uid);
      if (userDoc) {
        setSolvedProblems(userDoc.solvedProblems);
      }
    };
    if (user) getSolvedProblems(user);
  }, [user]);

  return { isSolved };
};

export default useGetUserSolvedProblems;
