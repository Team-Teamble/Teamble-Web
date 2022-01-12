import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);

  if (req.body.accessToken) {
    const accessToken = req.body.accessToken + "";
    cookies.set("accessToken", accessToken);
  }

  res.status(200).json({ message: "success" });
}
