import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "@/firebase/Auth";

const useSignInUser = () => useSignInWithEmailAndPassword(auth);

export default useSignInUser;
