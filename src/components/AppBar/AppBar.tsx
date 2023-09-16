import { FC } from "react";
import Link from "next/link";

type AppBarProps = {};

const AppBar: FC<AppBarProps> = ({}) => {
  return (
    <nav className="relative flex h-[50px] w-full shirnk-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div className="flex w-full items-center justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="h-[22px] flex-1">
          <img src="/logo-full.png" alt={"logo"} className={"h-full"} />
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
          <Link href="/auth">
            <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded hover:bg-dark-fill-2">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
