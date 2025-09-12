import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    products: {
      type: [mongoose.Types.ObjectId],
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

const CartModel = mongoose.models.Cart || mongoose.model("Cart", schema);

export default CartModel;
