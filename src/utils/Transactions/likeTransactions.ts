import { runTransaction } from "@firebase/firestore";
import firestore from "@/firebase/Database";
import { getUserRef } from "@/firebase/Database/user";
import { getProblemRef } from "@/firebase/Database/problem";
import { loadingToastCreator } from "@/utils/toast/toast";

type inputs = {
  userId: string;
  problemId: string;
  liked: boolean;
  disliked: boolean;
  incrementLike: () => void;
  decrementLike: () => void;
  decrementDislike: () => void;
  toggleLike: () => void;
  toggleDislike: () => void;
};

const likeProblem = async ({
  userId,
  problemId,
  liked,
  disliked,
  incrementLike,
  decrementLike,
  decrementDislike,
  toggleDislike,
  toggleLike,
}: inputs) => {
  const { startingLoading, loadedSuccessfully, errorWhileLoading } =
    loadingToastCreator("LikingToast");
  startingLoading("Updating.....");
  try {
    await runTransaction(firestore, async (transaction) => {
      const userRef = getUserRef(userId);
      const problemRef = getProblemRef(problemId);

      const userDoc = await transaction.get(userRef);
      const problemDoc = await transaction.get(problemRef);
      if (userDoc.exists() && problemDoc.exists()) {
        if (liked) {
          //   remove problem from user
          transaction.update(userRef, {
            likedProblems: userDoc
              .data()
              .likedProblems.filter((id: string) => id !== problemId),
          });

          transaction.update(problemRef, {
            likes: problemDoc.data().likes - 1,
          });
          decrementLike();
          toggleLike();
        } else if (disliked) {
          transaction.update(userRef, {
            likedProblems: [...userDoc.data().likedProblems, problemId],
            dislikedProblems: userDoc
              .data()
              .dislikedProblems.filter((id: string) => id !== problemId),
          });

          transaction.update(problemRef, {
            likes: problemDoc.data().likes + 1,
            dislikes: problemDoc.data().dislikes - 1,
          });
          incrementLike();
          decrementDislike();
          toggleDislike();
          toggleLike();
        } else {
          transaction.update(userRef, {
            likedProblems: [...userDoc.data().likedProblems, problemId],
          });

          transaction.update(problemRef, {
            likes: problemDoc.data().likes + 1,
          });
          incrementLike();
          toggleLike();
        }
      }
    });
    loadedSuccessfully("Successfully Updated!!");
  } catch (err: any) {
    errorWhileLoading(err.message);
  }
};

export default likeProblem;
