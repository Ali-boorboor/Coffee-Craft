import "@/models/Cart";
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    password: {
      type: String,
      required: true,
    },
    cart: {
      type: mongoose.Types.ObjectId,
      ref: "Cart",
      required: true,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.User || mongoose.model("User", schema);

export default UserModel;
