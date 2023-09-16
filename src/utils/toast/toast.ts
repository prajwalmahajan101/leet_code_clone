import { toast, TypeOptions } from "react-toastify";

const createToast = (type: TypeOptions) => (content: string) => {
  toast(content, {
    type,
    position: "top-right",
    autoClose: 3000,
    theme: "dark",
  });
};

export const successToast = createToast("success");

export const errorToast = createToast("error");
