import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import validationSchema from "@/validations/validationSchema";
import validateInputValues from "@/validations/validateInputValues";
import { NextApiRequest, NextApiResponse } from "next";
import {
  imageValidations,
  messageValidations,
  nameValidations,
  typeValidations,
} from "@/validations";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "GET": {
        const products = await ProductModel.find({}, "-__v")
          .populate("comments", "-__v -product -createdAt -updatedAt")
          .lean();

        res.json({ message: "Products catched successfully", products });

        break;
      }

      case "POST": {
        const { title, description, image, price, type } = req.body;

        const schema = validationSchema({
          title: nameValidations,
          description: messageValidations,
          image: imageValidations,
          type: typeValidations,
        });

        const isValid =
          (await validateInputValues({
            values: { title, description, image, type },
            schema,
          })) || typeof price === "number";

        if (!isValid) {
          return res.status(422).json({ message: "Request body is invalid!" });
        }

        await ProductModel.create({ title, description, image, price, type });

        res.status(201).json({ message: "Product added successfully" });

        break;
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in products controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};
