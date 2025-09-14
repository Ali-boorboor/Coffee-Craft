import CommentModel from "@/models/Comment";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "GET": {
        const comments = await CommentModel.find(
          {},
          "-__v -createdAt -updatedAt"
        )
          .populate("commenter", "username")
          .lean();

        res.json({ message: "Comments catched successfully", comments });

        break;
      }

      case "POST": {
        const { product, commenter, commentBody, image } = req.body;

        await CommentModel.create({ product, commenter, commentBody, image });

        res.status(201).json({ message: "Comment added successfully" });

        break;
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in comments controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};
