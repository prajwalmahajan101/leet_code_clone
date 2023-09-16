import { FC } from "react";
import Link from "next/link";
import useAuthUser from "@/hooks/authHooks/useAuthUser";
import LogoutButton from "@/components/Buttons/LogoutButton";
import useOpenModal from "@/hooks/modalHooks/useOpenModal";
import Image from "next/image";

type AppBarProps = {};

const AppBar: FC<AppBarProps> = ({}) => {
  const [user] = useAuthUser();
  const openModal = useOpenModal();
  return (
    <nav className="relative flex h-[50px] w-full shirnk-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div className="flex w-full items-center justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="h-[22px] flex-1">
          <Image src="/logo-full.png" alt={"logo"} height={100} width={100} />
        </Link>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href="https://github.com/prajwalmahajan101/leet_code_clone"
              target="_blank"
              rel="noreferrer"
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
            >
              Git Repo
            </a>
          </div>
          {!user && (
            <Link href="/auth" onClick={openModal}>
              <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded hover:bg-dark-fill-2">
                Sign In
              </button>
            </Link>
          )}
          {user && (
            <div className="cursor-pointer group relative">
              <Image
                src="/avatar.png"
                alt="user profile img"
                className="h-8 w-8 rounded-full"
                height={40}
                width={40}
              />
              <div
                className="absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1
              text-brand-orange rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out"
              >
                <p className="text-sm py-1.5 px-6">{user.email}</p>
              </div>
            </div>
          )}

          {user && <LogoutButton />}
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
