import { NextApiRequest, NextApiResponse } from "next";
import { validateToken } from "@/utils/jwtUtils";

type TokenPayload = {
  id: string;
  iat?: number;
  exp?: number;
};

const checkToken = (req: NextApiRequest, res: NextApiResponse) => {
  const tokenHeader = req.cookies.token;

  if (!tokenHeader || !tokenHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  const token = tokenHeader.split(" ")[1];
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  const tokenPayload = validateToken(token) as TokenPayload;

  return tokenPayload;
};

export default checkToken;
