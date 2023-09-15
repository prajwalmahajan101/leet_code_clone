import { getFirestore } from "@firebase/firestore";
import firebaseInitializedApp from "@/firebase/firebase";

const firestore = getFirestore(firebaseInitializedApp);

export default firestore;
