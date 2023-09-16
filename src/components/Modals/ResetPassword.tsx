import React, { FC, FormEvent, useEffect, useState } from "react";
import useForgotPassword from "@/hooks/authHooks/useForgotPassword";
import useChangeModalType from "@/hooks/modalHooks/useChangeModalType";
import { errorToast, successToast } from "@/utils/toast/toast";

type ForgotPasswordProps = {};
const ForgotPassword: FC<ForgotPasswordProps> = () => {
  const { setModalTypeToLogin } = useChangeModalType();
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [sendMail, sending, error] = useForgotPassword();
  const handleForgetPasswordSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      errorToast("Please enter email");
      return;
    }
    let success = await sendMail(email);
    if (success) {
      successToast("Password reset Mail sent");
      setSuccess(true);
    }
  };

  useEffect(() => {
    if (error) {
      errorToast(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (success) setModalTypeToLogin();
  }, [success]);

  return (
    <form
      className="space-y-6 px-6 lg:px-8 sm:pb-6 xl:pb-8"
      onSubmit={handleForgetPasswordSubmit}
    >
      <h3 className="text-xl font-medium text-white">Reset Password</h3>
      <p className="text-sm text-white">
        Forgotten your Password? Enter your e-mail address below and we&apos;ll
        send you an e-mail allowing you to reset it.
      </p>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Email
        </label>
        <input
          required
          id="email"
          type="email"
          name="email"
          value={email}
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
            block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@company.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
        text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
         disabled:bg-amber-200 disabled:text-black disabled:cursor-not-allowed
        "
      >
        {sending ? "Sending Mail" : "Reset Password"}
      </button>
    </form>
  );
};

export default ForgotPassword;
