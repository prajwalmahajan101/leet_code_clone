import React, { FC } from "react";
import NavBar from "@/components/NavBar/NavBar";
import AuthModal from "@/components/Modals/AuthModal";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

type AuthPageProps = {};

const AuthPage: FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalState);
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w7x1 mx-auto">
        <NavBar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <img src="/hero.png" alt="Hero Image for LeetClone" />
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};
export default AuthPage;
