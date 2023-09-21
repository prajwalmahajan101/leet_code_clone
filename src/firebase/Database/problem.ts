import { doc, setDoc } from "@firebase/firestore";
import firestore from "@/firebase/Database/index";
import { DBProblem } from "@/utils/types/problem";

export const saveProblem = async (problem: DBProblem) => {
  await setDoc(doc(firestore, "problems", problem.id), problem);
};
