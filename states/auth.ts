import { atom } from "recoil";
import { z } from "zod";

export interface UserInfo {
  id: number;
  name: string;
  profilePic: string;
  currentProjectId: number | null;
}

export const authUserAtom = atom<UserInfo | null>({
  key: "authUser",
  default: null,
});

export const userInfoChecker = z.object({
  id: z.number(),
  name: z.string(),
  profilePic: z.string(),
  currentProjectId: z.union([z.number(), z.null()]),
});
