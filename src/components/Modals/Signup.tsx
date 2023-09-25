import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import useChangeModalType from "@/hooks/modalHooks/useChangeModalType";
import useCreateUser from "@/hooks/authHooks/useCreateUser";
import { errorToast, loadingToastCreator } from "@/utils/toast/toast";
import { User } from "@/utils/types/user";
import { saveUser } from "@/firebase/Database/user";

type SignUpProps = {};
const SignUp: FC<SignUpProps> = ({}) => {
  const { setModalTypeToLogin } = useChangeModalType();

  const router = useRouter();
  const [createUserWithEmailAndPassword, , loading, error] = useCreateUser();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const { startingLoading, loadedSuccessfully, errorWhileLoading } =
    loadingToastCreator("UserSignUpToast");

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.displayName) {
      errorToast("Please fill all fields");
      return;
    }
    startingLoading("Please Wait we are Registering You.....");
    const newUser = await createUserWithEmailAndPassword(
      inputs.email,
      inputs.password,
    );
    if (!newUser) return;

    const userData: User = {
      id: newUser.user.uid,
      email: newUser.user.email ? newUser.user.email : inputs.email,
      displayName: inputs.displayName,
      starredProblems: [],
      likedProblems: [],
      dislikedProblems: [],
      solvedProblems: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    await saveUser(userData);
    loadedSuccessfully("Signed up successfully");
    await router.push("/");
  };

  useEffect(() => {
    if (error) {
      // auth/email-already-in-use
      if (error.code === "auth/weak-password") {
        errorWhileLoading("Password must be at least 6 characters long");
      } else if (error.code === "auth/email-already-in-use") {
        errorWhileLoading("You are Already Registered.Try Logging in ...");
      } else {
        errorWhileLoading(error.message);
      }
    }
  }, [error, errorWhileLoading]);

  return (
    <form className="space-y-6 px-6 py-4" onSubmit={handleRegister}>
      <h3 className="text-xl font-medium text-white">Register to LeetClone</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
            block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@company.com"
          value={inputs.email}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <label
          htmlFor="displayName"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Display Name
        </label>
        <input
          id="displayName"
          type="text"
          name="displayName"
          required
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
            block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="John Doe"
          value={inputs.displayName}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          required
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
        disabled:bg-amber-200 disabled:text-black disabled:cursor-not-allowed
        "
        disabled={loading}
      >
        {loading ? "Registering" : "Register"}
      </button>
      <div
        className="text-sm font-medium text-gray-300"
        onClick={setModalTypeToLogin}
      >
        Already Have An Account?{" "}
        <a href="#" className="text-blue-700 hover:underline">
          Log In
        </a>
      </div>
    </form>
  );
};

export default SignUp;
