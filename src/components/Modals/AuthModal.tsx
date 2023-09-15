import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { IoClose } from "react-icons/io5";

import { authModalState, ModalType } from "@/atoms/authModalAtom";
import useCloseModal from "@/hooks/modalHooks/useCloseModal";
import Login from "@/components/Modals/Login";
import SignUp from "@/components/Modals/Signup";
import ForgotPassword from "@/components/Modals/ResetPassword";

type AuthModalProps = {};

const AuthModal: FC<AuthModalProps> = ({}) => {
  const authModal = useRecoilValue(authModalState);
  const closeModal = useCloseModal();

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60"
        onClick={closeModal}
      ></div>
      <div className="w-full sm:w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
        <div className="relative w-full h-full mx-auto flex items-center justify-center">
          <div className="bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange-s to-slate-900 mx-6">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="
                  bg-transprarent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center text-white hover:bg-gray-800 hover:text-white"
                onClick={closeModal}
              >
                <IoClose className="h-5 w-5" />
              </button>
            </div>
            {authModal.type === ModalType.Login && <Login />}
            {authModal.type === ModalType.Register && <SignUp />}
            {authModal.type === ModalType.ForgotPassword && <ForgotPassword />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
