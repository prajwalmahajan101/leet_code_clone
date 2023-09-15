import { atom } from "recoil";

export enum ModalType {
  Login,
  Register,
  ForgotPassword,
}

type AuthModalState = {
  isOpen: boolean;
  type: ModalType;
};

const initialState: AuthModalState = {
  isOpen: false,
  type: ModalType.Login,
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: initialState,
});
