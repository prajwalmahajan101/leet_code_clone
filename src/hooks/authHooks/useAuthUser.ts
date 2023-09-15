import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/Auth";

const useAuthUser = () => useAuthState(auth);

export default useAuthUser;
