import UserModel from "@/models/User";
import checkToken from "@/utils/checkToken";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    connectToDB();

    const tokenPayload = checkToken(req, res);

    switch (req.method) {
      case "GET": {
        const user = await UserModel.findById(tokenPayload.id, "username cart")
          .populate("cart", "-_id -__v -createdAt -updatedAt")
          .lean();

        return res.json({ message: "Authorized successfully", user });
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
