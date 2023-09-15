import React, { FC, useEffect, useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import AuthModal from "@/components/Modals/AuthModal";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import useAuthUser from "@/hooks/authHooks/useAuthUser";
import { useRouter } from "next/router";

type AuthPageProps = {};

const AuthPage: FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalState);
  const router = useRouter();
  const [user, loading, error] = useAuthUser();
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    if (user) {
      router.push("/");
    }
    if (!loading && !user) setPageLoading(false);
  }, [user]);

  if (pageLoading) return null;

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
