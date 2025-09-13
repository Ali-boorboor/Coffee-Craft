import UserModel from "@/models/User";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import { validateToken } from "@/utils/jwtUtils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    connectToDB();

    switch (req.method) {
      case "GET": {
        const hasToken =
          req.cookies.token && req.cookies.token.startsWith("Bearer ");

        if (hasToken) {
          const token = req.cookies.token?.split(" ")[1]!;

          const tokenPayload: any = validateToken(token);

          const user = await UserModel.findById(
            tokenPayload.id,
            "username cart"
          )
            .populate("cart", "-_id -__v -createdAt -updatedAt")
            .lean();

          return res.json({ message: "Authorized successfully", user });
        } else {
          return res.status(401).json({ message: "Unauthorized!" });
        }
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in getme controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};
