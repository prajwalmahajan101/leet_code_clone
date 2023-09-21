import {
  getDocumentsFromFirestore,
  storeDataInCollection,
} from "@/firebase/Database/index";
import { User } from "@/utils/types/user";

export const saveUser = storeDataInCollection<User>("users");

export const getUsers = getDocumentsFromFirestore<User>("users");
