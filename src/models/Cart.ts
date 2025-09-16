import "@/models/Product";
import mongoose from "mongoose";

export interface ICart extends mongoose.Document {
  products: mongoose.Types.ObjectId[];
  totalPrice: number;
  totalQuantity: number;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new mongoose.Schema(
  {
    products: {
      type: [mongoose.Types.ObjectId],
      ref: "Product",
      default: [],
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    totalQuantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const CartModel: mongoose.Model<ICart> =
  mongoose.models.Cart || mongoose.model("Cart", schema);

export default CartModel;
