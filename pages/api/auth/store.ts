import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
import { addDays } from "date-fns";
import { UserInfo } from "../../../states/auth";
import { z } from "zod";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);
  try {
    if (req.body.accessToken && req.body.user) {
      const expires = addDays(new Date(), 7);

      const accessToken = req.body.accessToken + "";

      const user: UserInfo = z
        .object({
          name: z.string(),
          id: z.number(),
        })
        .parse(req.body.user);

      cookies.set("access", encodeURIComponent(JSON.stringify({ accessToken, user })), {
        expires,
      });
    }

    res.status(200).json({ message: "success" });
  } catch (e) {
    console.error(e);
    res.status(403).json({});
  }
}
