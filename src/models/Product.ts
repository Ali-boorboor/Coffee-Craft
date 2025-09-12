import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 3,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["hot", "cold"],
      default: "hot",
    },
    price: {
      type: Number,
      min: 0,
      default: 0,
    },
    description: {
      type: String,
      minLength: 3,
      default:
        "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
    },
  },
  { timestamps: true }
);

schema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "product",
});

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", schema);

export default ProductModel;
