import React, { FC } from "react";
import { FiLogOut } from "react-icons/fi";
import useLogout from "@/hooks/authHooks/useLogout";

type LogoutButtonProps = {};

const LogoutButton: FC<LogoutButtonProps> = ({}) => {
  const [signOut] = useLogout();
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <button
      className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange"
      onClick={handleLogout}
    >
      <FiLogOut />
    </button>
  );
};

export default LogoutButton;
