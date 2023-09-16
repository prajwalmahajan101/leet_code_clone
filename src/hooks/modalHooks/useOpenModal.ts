import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

const useOpenModal = () => {
  const setAuthModal = useSetRecoilState(authModalState);
  return () => {
    setAuthModal((prevState) => ({
      ...prevState,
      isOpen: true,
    }));
  };
};

export default useOpenModal;
