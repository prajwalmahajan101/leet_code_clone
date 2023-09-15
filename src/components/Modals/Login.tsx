import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import useChangeModalType from "@/hooks/modalHooks/useChangeModalType";
import useSignInUser from "@/hooks/authHooks/useSignInUser";
import { useRouter } from "next/router";

type LoginProps = {};

const Login: FC<LoginProps> = ({}) => {
  const router = useRouter();
  const { setModalTypeToForgetPassword, setModalTypeToRegister } =
    useChangeModalType();

  const [signInWithEmailAndPassword, user, loading, error] = useSignInUser();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!inputs.email || !inputs.password) {
        alert("Please fill all fields");
      }
      let user = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password,
      );
      if (!user) return;
      await router.push("/");
    } catch (e: any) {
      alert(e.message);
    }
  };

  console.log("user", user);

  return (
    <form className="space-y-6 px-6 py-4" onSubmit={handleLogin}>
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
          value={inputs.email}
          onChange={handleChangeInput}
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
          value={inputs.password}
          onChange={handleChangeInput}
        />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
        text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
        disabled:bg-amber-300 disabled:text-black disabled:cursor-not-allowed
        "
        disabled={loading}
      >
        {loading ? "Getting You In" : "Log In"}
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
