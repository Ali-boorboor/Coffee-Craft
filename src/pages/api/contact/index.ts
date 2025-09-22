import ContactModel from "@/models/Contact";
import connectToDB from "@/database/dbConnection";
import validationSchema from "@/utils/validators/validationSchema";
import validateInputValues from "@/utils/validators/validateInputValues";
import { NextApiRequest, NextApiResponse } from "next";
import {
  nameValidations,
  emailValidations,
  subjectValidations,
  messageValidations,
} from "@/validations";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "POST": {
        const { name, email, subject, message } = req.body;

        const schema = validationSchema({
          name: nameValidations,
          email: emailValidations,
          subject: subjectValidations,
          message: messageValidations,
        });

        const isValid = await validateInputValues({
          values: { name, email, subject, message },
          schema,
        });

        if (!isValid) {
          return res.status(422).json({ message: "Request body is invalid!" });
        }

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

export default handler;
