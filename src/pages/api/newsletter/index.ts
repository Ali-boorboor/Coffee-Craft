import NewsletterModel from "@/models/Newsletter";
import connectToDB from "@/database/dbConnection";
import validationSchema from "@/validations/validationSchema";
import validateInputValues from "@/validations/validateInputValues";
import { NextApiRequest, NextApiResponse } from "next";
import { emailValidations } from "@/validations";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "POST": {
        const { email } = req.body;

        const schema = validationSchema({
          email: emailValidations,
        });

        const isValid = await validateInputValues({
          values: { email },
          schema,
        });

        if (!isValid) {
          return res.status(422).json({ message: "Request body is invalid!" });
        }

        const isEmailRepeated = await NewsletterModel.findOne({ email });

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

export default handler;
