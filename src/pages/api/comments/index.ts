import CommentModel from "@/models/Comment";
import connectToDB from "@/database/dbConnection";
import validationSchema from "@/utils/validators/validationSchema";
import validateInputValues from "@/utils/validators/validateInputValues";
import { imageValidations, messageValidations } from "@/validations";
import { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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

        const schema = validationSchema({
          commentBody: messageValidations,
          image: imageValidations,
        });

        const isValid =
          (await validateInputValues({
            values: { commentBody, image },
            schema,
          })) ||
          isValidObjectId(product) ||
          isValidObjectId(commenter);

        if (!isValid) {
          return res.status(422).json({ message: "Request body is invalid!" });
        }

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

export default handler;
