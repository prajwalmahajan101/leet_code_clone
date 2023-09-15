import React, { FC } from "react";
import useChangeModalType from "@/hooks/modalHooks/useChangeModalType";

type LoginProps = {};

const Login: FC<LoginProps> = ({}) => {
  const { setModalTypeToForgetPassword, setModalTypeToRegister } =
    useChangeModalType();

  return (
    <form className="space-y-6 px-6 py-4">
      <h3 className="text-xl font-medium text-white">Sign in to LeetClone</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
            block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
            block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="***********"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
        text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
      >
        Log In
      </button>
      <button
        className="flex w-full justify-end"
        onClick={setModalTypeToForgetPassword}
      >
        <a
          href="#"
          className="text-sm block text-brand-orange hover:underline text-right"
        >
          Forgot Password?
        </a>
      </button>
      <div className="text-sm font-medium text-gray-300">
        Not Registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={setModalTypeToRegister}
        >
          Create a new account
        </a>
      </div>
    </form>
  );
};

export default Login;
