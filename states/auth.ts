import { atom } from "recoil";

export interface UserInfo {
  name: string;
}

export const authUserAtom = atom<UserInfo | null>({
  key: "authUser",
  default: null,
});
