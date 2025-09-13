import cookie from "cookie";
import UserModel from "@/models/User";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import { compareData } from "@/utils/bcryptUtils";
import { generateToken } from "@/utils/jwtUtils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "POST": {
        const { username, password } = req.body;

        const user = await UserModel.findOne({ username });

        if (user) {
          const isPasswordTrue = await compareData(password, user.password);

          if (isPasswordTrue) {
            const token = generateToken({ id: user._id });

            return res
              .setHeader(
                "Set-Cookie",
                cookie.serialize("token", `Bearer ${token}`, {
                  httpOnly: true,
                  path: "/",
                  maxAge: 60 * 60 * 24,
                })
              )
              .json({ message: "Logged in successfully" });
          }

          return res
            .status(401)
            .json({ message: "Username or password is wrong!" });
        } else {
          return res.status(404).json({ message: "User not found!" });
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
