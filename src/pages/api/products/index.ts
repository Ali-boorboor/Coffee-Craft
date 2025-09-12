import "@/models/Comment";
import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

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
