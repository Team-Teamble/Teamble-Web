import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
import { addDays } from "date-fns";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);

  if (req.body.accessToken) {
    const accessToken = req.body.accessToken + "";
    cookies.set("accessToken", accessToken, {
      expires: addDays(new Date(), 7),
    });
  }

  res.status(200).json({ message: "success" });
}
