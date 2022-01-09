import { atom } from "recoil";

export const authTokenAtom = atom<null | string>({
  key: "authToken",
  default: null,
});
