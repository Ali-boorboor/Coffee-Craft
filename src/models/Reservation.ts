import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ReservationModel =
  mongoose.models.Reservation || mongoose.model("Reservation", schema);

export default ReservationModel;
