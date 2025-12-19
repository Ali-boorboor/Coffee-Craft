import connectToDB from "@/database/dbConnection";
import ReservationModel from "@/models/Reservation";
import validationSchema from "@/utils/validators/validationSchema";
import validateInputValues from "@/utils/validators/validateInputValues";
import { NextApiRequest, NextApiResponse } from "next";
import {
  nameValidations,
  emailValidations,
  dateValidations,
  timeValidations,
} from "@/validations";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDB();

  try {
    switch (req.method) {
      case "POST": {
        const { name, email, date, time } = req.body;

        const schema = validationSchema({
          name: nameValidations,
          email: emailValidations,
          date: dateValidations,
          time: timeValidations,
        });

        const isValid = await validateInputValues({
          values: { name, email, date, time },
          schema,
        });

        if (!isValid) {
          return res.status(422).json({ message: "Request body is invalid!" });
        }

        const isReservationRepeated = await ReservationModel.findOne({
          $or: [{ name }, { email }],
        }).lean();

        if (isReservationRepeated) {
          return res
            .status(409)
            .json({ message: "Reservation already exist!" });
        }

        await ReservationModel.create({ name, email, date, time });

        return res
          .status(201)
          .json({ message: "Reservation added successfully" });
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in reservation controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};

export default handler;
