import ServiceModel from "@/models/Service";
import connectToDB from "@/database/dbConnection";
import validationSchema from "@/utils/validators/validationSchema";
import validateInputValues from "@/utils/validators/validateInputValues";
import { NextApiRequest, NextApiResponse } from "next";
import {
  nameValidations,
  imageValidations,
  messageValidations,
} from "@/validations";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDB();

  try {
    switch (req.method) {
      case "GET": {
        const services = await ServiceModel.find({}).lean();

        res.json({ message: "Services catched successfully", services });

        break;
      }

      case "POST": {
        const { title, description, image, iconName, iconPack } = req.body;

        const schema = validationSchema({
          title: nameValidations,
          image: imageValidations,
          description: messageValidations,
        });

        const isValid = await validateInputValues({
          values: { title, description, image },
          schema,
        });

        if (!isValid) {
          return res.status(422).json({ message: "Request body is invalid!" });
        }

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

export default handler;
