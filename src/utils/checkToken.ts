import { NextApiRequest, NextApiResponse } from "next";
import { validateToken } from "@/utils/jwtUtils";

const checkToken = (req: NextApiRequest, res: NextApiResponse) => {
  const hasToken = req.cookies.token && req.cookies.token.startsWith("Bearer ");

  if (!hasToken) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  const token = req.cookies.token?.split(" ")[1]!;

  const tokenPayload: any = validateToken(token);

  return tokenPayload;
};

export default checkToken;
