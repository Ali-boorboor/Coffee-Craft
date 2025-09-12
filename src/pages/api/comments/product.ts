import CommentModel from "@/models/Comment";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "GET": {
        const { productID } = req.query;

        const comments = await CommentModel.find(
          { product: productID },
          "-__v"
        ).lean();

        res.json({ message: "Comments catched successfully", comments });

        break;
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in product comments controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};
