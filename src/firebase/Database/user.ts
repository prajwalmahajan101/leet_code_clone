import {
  getDocRef,
  getDocumentFromFirestore,
  getDocumentsFromFirestore,
  storeDataInCollection,
  updateDocument,
} from "@/firebase/Database/index";
import { User } from "@/utils/types/user";

export const saveUser = storeDataInCollection<User>("users");

export const getUsers = getDocumentsFromFirestore<User>("users");

export const getUser = getDocumentFromFirestore<User>("users");

export const getUserRef = getDocRef("users");

export const updateUserData = updateDocument("users");