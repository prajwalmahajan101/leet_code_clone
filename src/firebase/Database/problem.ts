import {
  getDocRef,
  getDocumentFromFirestore,
  getDocumentsFromFirestore,
  storeDataInCollection,
} from "@/firebase/Database/index";
import { DBProblem } from "@/utils/types/problem";

export const saveProblem = storeDataInCollection<DBProblem>("problems");

export const getProblemById = getDocumentFromFirestore<DBProblem>("problems");

export const getProblems = getDocumentsFromFirestore<DBProblem>("problems");

export const getProblemRef = getDocRef("problems");
