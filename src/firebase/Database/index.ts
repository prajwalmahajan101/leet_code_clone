import { doc, getFirestore, setDoc } from "@firebase/firestore";
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

export default firestore;
