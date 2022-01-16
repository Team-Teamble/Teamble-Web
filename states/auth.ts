import { atom } from "recoil";

export interface UserInfo {
  id: number;
  name: string;
}

export const authUserAtom = atom<UserInfo | null>({
  key: "authUser",
  default: null,
});
