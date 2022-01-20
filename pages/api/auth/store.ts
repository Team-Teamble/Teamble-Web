import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
import { addDays } from "date-fns";
import { UserInfo, userInfoChecker } from "../../../states/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);
  try {
    if (req.body.accessToken && req.body.user) {
      const expires = addDays(new Date(), 7);

      const accessToken = req.body.accessToken + "";

      const user: UserInfo = userInfoChecker.parse(req.body.user);

      cookies.set("access", encodeURIComponent(JSON.stringify({ accessToken, user })), {
        expires,
      });
    } else {
      throw new Error("WHAT");
    }

    res.status(200).json({ message: "success" });
  } catch (e) {
    console.error(e);
    res.status(403).json({});
  }
}
