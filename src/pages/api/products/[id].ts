import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "GET": {
        const { id } = req.query;

        const product = await ProductModel.findById(id, "-__v").lean();

        res.json({ message: "Product catched successfully", product });

        break;
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in product controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};
