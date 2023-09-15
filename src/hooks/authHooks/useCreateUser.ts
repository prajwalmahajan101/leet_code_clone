import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "@/firebase/Auth";

const useCreateUser = () => useCreateUserWithEmailAndPassword(auth);

export default useCreateUser;
