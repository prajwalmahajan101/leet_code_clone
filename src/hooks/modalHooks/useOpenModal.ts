import { useSetRecoilState } from "recoil";
import { authModalState, ModalType } from "@/atoms/authModalAtom";

const useOpenModal = () => {
  const setAuthModal = useSetRecoilState(authModalState);
  return () => {
    setAuthModal((prevState) => ({
      ...prevState,
      isOpen: true,
      type: ModalType.Login,
    }));
  };
};

export default useOpenModal;
