import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const NewsletterModel =
  mongoose.models.Newsletter || mongoose.model("Newsletter", schema);

export default NewsletterModel;
