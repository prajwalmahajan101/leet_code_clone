import { loadingToastCreator } from "@/utils/toast/toast";
import { runTransaction } from "@firebase/firestore";
import firestore from "@/firebase/Database";
import { getUserRef } from "@/firebase/Database/user";

type inputs = {
  userId: string;
  problemId: string;
  starred: boolean;
  toggleStarred: () => void;
};
const starTransaction = async ({
  userId,
  problemId,
  starred,
  toggleStarred,
}: inputs) => {
  const { startingLoading, loadedSuccessfully, errorWhileLoading } =
    loadingToastCreator("StarringToast");
  startingLoading("Updating.....");
  try {
    await runTransaction(firestore, async (transaction) => {
      const userRef = getUserRef(userId);
      const userDoc = await transaction.get(userRef);
      if (userDoc.exists()) {
        if (starred) {
          transaction.update(userRef, {
            starredProblems: userDoc
              .data()
              .starredProblems.filter((id: string) => id !== problemId),
          });
        } else {
          transaction.update(userRef, {
            starredProblems: [...userDoc.data().starredProblems, problemId],
          });
        }
        toggleStarred();
      }
    });
    loadedSuccessfully("Successfully Updated!!");
  } catch (err: any) {
    errorWhileLoading(err.message);
  }
};

export default starTransaction;
