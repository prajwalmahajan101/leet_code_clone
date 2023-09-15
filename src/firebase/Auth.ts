import { getAuth } from "@firebase/auth";

import firebaseInitializedApp from "@/firebase/firebase";

const auth = getAuth(firebaseInitializedApp);

export default auth;
