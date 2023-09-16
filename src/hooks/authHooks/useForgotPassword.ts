import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "@/firebase/Auth";

const useForgotPassword = () => {
  return useSendPasswordResetEmail(auth);
};

export default useForgotPassword;
