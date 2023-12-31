import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState, ModalType } from "@/atoms/authModalAtom";

const useCloseModal = () => {
  const setAuthModal = useSetRecoilState(authModalState);
  const closeModal = () => {
    setAuthModal((prevState) => ({
      ...prevState,
      isOpen: false,
      type: ModalType.Login,
    }));
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return closeModal;
};

export default useCloseModal;
