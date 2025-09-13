import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET": {
        const hasToken = req.cookies.token;

        if (hasToken) {
          return res
            .setHeader(
              "Set-Cookie",
              cookie.serialize("token", "", {
                path: "/",
                maxAge: 0,
              })
            )
            .json({ message: "Logged out successfully" });
        } else {
          return res.status(401).json({ message: "Not allowed!" });
        }
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
