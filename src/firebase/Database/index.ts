import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import firebaseInitializedApp from "@/firebase/firebase";

const firestore = getFirestore(firebaseInitializedApp);

interface StorableData {
  id: string;
}

export const storeDataInCollection =
  <T>(collection: string) =>
  async (data: T & StorableData) => {
    await setDoc(doc(firestore, collection, data.id), data);
  };

export const getDocumentFromFirestore =
  <T>(collection: string) =>
  async (id: string): Promise<T | null> => {
    let docRef = doc(firestore, collection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as T;
    }
    return null;
  };

export const getDocumentsFromFirestore =
  <T>(collectionName: string) =>
  async (): Promise<T[]> => {
    const options: any[] = [collection(firestore, collectionName)];
    if (collectionName === "problems") {
      options.push(orderBy("order", "asc"));
    }
    // @ts-ignore
    const q = query(...options);
    const querySnapshot = await getDocs(q);
    const temp: T[] = [];
    querySnapshot.forEach((doc) => {
      // @ts-ignore
      temp.push({ id: doc.id, ...doc.data() } as T);
    });
    return temp;
  };

export const getDocRef = (collection: string) => (id: string) => {
  return doc(firestore, collection, id);
};

export const updateDocument =
  (collection: string) => async (id: string, data: any) => {
    let docRef = doc(firestore, collection, id);
    await updateDoc(docRef, data);
  };

export default firestore;
