import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
import { apiService } from "../../../api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);

  const { accessToken } = await apiService.auth.login({ username: req.body.username, password: req.body.password });

  cookies.set("accessToken", accessToken);

  res.status(200).json({ message: "success" });
}
