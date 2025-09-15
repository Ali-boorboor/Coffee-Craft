import connectToDB from "@/database/dbConnection";
import ContactModel from "@/models/Contact";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "POST": {
        const { name, email, subject, message } = req.body;

        await ContactModel.create({ name, email, subject, message });

        return res.status(201).json({ message: "Message sent successfully" });
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in contact controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};
