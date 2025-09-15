import cookie from "cookie";
import checkToken from "@/utils/checkToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    checkToken(req, res);

    switch (req.method) {
      case "GET": {
        return res
          .setHeader(
            "Set-Cookie",
            cookie.serialize("token", "", {
              path: "/",
              maxAge: 0,
            })
          )
          .json({ message: "Logged out successfully" });
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in login controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};
