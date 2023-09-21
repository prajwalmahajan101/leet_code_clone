import { storeDataInCollection } from "@/firebase/Database/index";
import { DBProblem } from "@/utils/types/problem";

export const saveProblem = storeDataInCollection<DBProblem>("problems");
