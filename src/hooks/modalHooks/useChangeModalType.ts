import { useSetRecoilState } from "recoil";
import { authModalState, ModalType } from "@/atoms/authModalAtom";

const useChangeModalType = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (modalType: ModalType) => () => {
    setAuthModalState((prevState) => ({ ...prevState, type: modalType }));
  };

  const setModalTypeToForgetPassword = handleClick(ModalType.ForgotPassword);
  const setModalTypeToRegister = handleClick(ModalType.Register);
  const setModalTypeToLogin = handleClick(ModalType.Login);

  return {
    setModalTypeToLogin,
    setModalTypeToRegister,
    setModalTypeToForgetPassword,
  };
};

export default useChangeModalType;
