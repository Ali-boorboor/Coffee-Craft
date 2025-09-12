import ServiceModel from "@/models/Service";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "GET": {
        const services = await ServiceModel.find({}).lean();

        res.json({ message: "Services catched successfully", services });

        break;
      }

      case "POST": {
        const { title, description, image, iconName, iconPack } = req.body;

        await ServiceModel.create({
          title,
          description,
          image,
          iconName,
          iconPack,
        });

        res.status(201).json({ message: "Service added successfully" });

        break;
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in services controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};
