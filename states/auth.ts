import { z } from "zod";

export interface UserInfo {
  id: number;
  name: string;
  profilePic: string;
  currentProjectId: number | null;
  isAlarmAvailable?: boolean;
}

export const userInfoChecker = z.object({
  id: z.number(),
  name: z.string(),
  profilePic: z.string(),
  currentProjectId: z.union([z.number(), z.null()]),
});
