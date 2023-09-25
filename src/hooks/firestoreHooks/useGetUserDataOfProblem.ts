import { useEffect, useState } from "react";
import useAuthUser from "@/hooks/authHooks/useAuthUser";
import { getUser } from "@/firebase/Database/user";

const useGetUserDataOfProblem = (problemId: string) => {
  const [data, setData] = useState({
    liked: false,
    disliked: false,
    starred: false,
    solved: false,
  });

  const changeData =
    (propertyName: "liked" | "disliked" | "starred" | "solved") => () => {
      setData((prevState) => {
        return {
          ...prevState,
          [propertyName]: !prevState[propertyName],
        };
      });
    };

  const toggleLike = changeData("liked");
  const toggleDislike = changeData("disliked");
  const toggleStarred = changeData("starred");
  const toggleSolved = changeData("solved");

  const [user] = useAuthUser();

  useEffect(() => {
    const fetchUserData = async (id: string) => {
      const userData = await getUser(id);
      if (userData) {
        setData({
          liked: userData.likedProblems.includes(problemId),
          disliked: userData.dislikedProblems.includes(problemId),
          starred: userData.starredProblems.includes(problemId),
          solved: userData.solvedProblems.includes(problemId),
        });
      }
    };
    if (user) fetchUserData(user.uid);

    return () => {
      setData({
        liked: false,
        disliked: false,
        starred: false,
        solved: false,
      });
    };
  }, [problemId, user]);

  return { ...data, toggleLike, toggleDislike, toggleStarred, toggleSolved };
};

export default useGetUserDataOfProblem;
