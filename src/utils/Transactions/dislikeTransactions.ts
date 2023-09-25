import { getUserRef } from "@/firebase/Database/user";
import { getProblemRef } from "@/firebase/Database/problem";
import { runTransaction } from "@firebase/firestore";
import firestore from "@/firebase/Database";
import { loadingToastCreator } from "@/utils/toast/toast";

type inputs = {
  userId: string;
  problemId: string;
  liked: boolean;
  disliked: boolean;
  decrementLike: () => void;
  decrementDislike: () => void;
  incrementDislike: () => void;
  toggleLike: () => void;
  toggleDislike: () => void;
};

const dislikeProblem = async ({
  userId,
  problemId,
  liked,
  disliked,
  incrementDislike,
  decrementLike,
  decrementDislike,
  toggleDislike,
  toggleLike,
}: inputs) => {
  const { startingLoading, loadedSuccessfully, errorWhileLoading } =
    loadingToastCreator("DislikingToast");
  startingLoading("Updating.....");
  try {
    await runTransaction(firestore, async (transaction) => {
      const userRef = getUserRef(userId);
      const problemRef = getProblemRef(problemId);

      const userDoc = await transaction.get(userRef);
      const problemDoc = await transaction.get(problemRef);
      if (userDoc.exists() && problemDoc.exists()) {
        if (disliked) {
          transaction.update(userRef, {
            dislikedProblems: userDoc
              .data()
              .dislikedProblems.filter((id: string) => id !== problemId),
          });

          transaction.update(problemRef, {
            dislikes: problemDoc.data().dislikes - 1,
          });
          decrementDislike();
          toggleDislike();
        } else if (liked) {
          transaction.update(userRef, {
            dislikedProblems: [...userDoc.data().dislikedProblems, problemId],
            likedProblems: userDoc
              .data()
              .likedProblems.filter((id: string) => id !== problemId),
          });

          transaction.update(problemRef, {
            likes: problemDoc.data().likes - 1,
            dislikes: problemDoc.data().dislikes + 1,
          });
          decrementLike();
          incrementDislike();
          toggleDislike();
          toggleLike();
        } else {
          transaction.update(userRef, {
            dislikedProblems: [...userDoc.data().dislikedProblems, problemId],
          });

          transaction.update(problemRef, {
            dislikes: problemDoc.data().dislikes + 1,
          });
          incrementDislike();
          toggleDislike();
        }
      }
      loadedSuccessfully("Successfully Updated!!");
    });
  } catch (err: any) {
    errorWhileLoading(err.message);
  }
};

export default dislikeProblem;
