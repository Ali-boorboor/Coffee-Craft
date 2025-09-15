import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    message: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 1000,
    },
  },
  { timestamps: true }
);

const ContactModel =
  mongoose.models.Contact || mongoose.model("Contact", schema);

export default ContactModel;
