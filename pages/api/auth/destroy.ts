import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);

  cookies.set("access", null);

  res.status(200).json({});
}
