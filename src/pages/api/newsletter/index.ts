import NewsletterModel from "@/models/Newsletter";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "POST": {
        const { email } = req.body;

        const isEmailRepeated = await NewsletterModel.find({ email });

        if (isEmailRepeated) {
          return res.status(409).json({ message: "Email already exist!" });
        }

        await NewsletterModel.create({ email });

        return res.status(201).json({ message: "Email added successfully" });
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in newsletter controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};
