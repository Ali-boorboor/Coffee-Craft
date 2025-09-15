import connectToDB from "@/database/dbConnection";
import ReservationModel from "@/models/Reservation";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "POST": {
        const { name, email, date, time } = req.body;

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
