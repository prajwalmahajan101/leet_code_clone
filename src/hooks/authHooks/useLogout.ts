import { useSignOut } from "react-firebase-hooks/auth";
import auth from "@/firebase/Auth";

const useLogout = () => {
  return useSignOut(auth);
};

export default useLogout;
