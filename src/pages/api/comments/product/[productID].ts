import CommentModel from "@/models/Comment";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDB();

  try {
    switch (req.method) {
      case "GET": {
        const { productID } = req.query;

        const isValid = isValidObjectId(productID);

        if (!isValid) {
          return res.status(422).json({ message: "Product id is invalid!" });
        }

        const comments = await CommentModel.find(
          { product: productID },
          "-__v -createdAt -updatedAt -product"
        )
          .populate("commenter", "username")
          .lean();

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

export default handler;
