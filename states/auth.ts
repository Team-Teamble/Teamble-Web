import { atom } from "recoil";

export interface UserInfo {
  name: string;
}

export const authUserAtom = atom<UserInfo>({
  key: "authUser",
  default: {
    name: "UNDEFINED",
  },
});
