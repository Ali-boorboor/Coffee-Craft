import mongoose from "mongoose";
import UserModel from "@/models/User";
import CartModel from "@/models/Cart";
import checkToken from "@/utils/checkToken";
import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";
import { Product } from "@/types";

interface normalizedProduct extends Product {
  quantity: number;
}

interface CartLean {
  _id: mongoose.Types.ObjectId;
  products: Product[] | mongoose.Types.ObjectId[];
  totalPrice: number;
  totalQuantity: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDB();

  try {
    const tokenPayload = checkToken(req, res);

    switch (req.method) {
      case "GET": {
        const user = await UserModel.findById(
          tokenPayload?.id,
          "cart -_id"
        ).populate("cart", "_id");

        const cart = await CartModel.findById(
          user.cart._id,
          "-__v -createdAt -updatedAt"
        )
          .populate("products", "-__v -createdAt -updatedAt")
          .lean<CartLean>();

        const normalizeRepeatedProducts =
          Array.isArray(cart?.products) && cart.products[0]?._id
            ? (cart.products as Product[]).reduce(
                (prevProducts: normalizedProduct[], product) => {
                  const existingProduct = prevProducts.find(
                    (accProduct) =>
                      String(accProduct._id) === String(product._id)
                  );

                  if (existingProduct) {
                    existingProduct.quantity += 1;
                  } else {
                    prevProducts.push({ ...product, quantity: 1 });
                  }

                  return prevProducts;
                },
                []
              )
            : [];

        return res.json({
          message: "User cart catched successfully",
          userCart: { ...cart, products: normalizeRepeatedProducts },
        });
      }

      case "POST": {
        const { productID } = req.body;

        const isValid = isValidObjectId(productID);

        if (!isValid) {
          return res.status(422).json({ message: "Request body is invalid!" });
        }

        const user = await UserModel.findById(
          tokenPayload?.id,
          "cart -_id"
        ).populate("cart");

        const product = await ProductModel.findById(productID);

        const cartID = user.cart._id;

        await CartModel.findByIdAndUpdate(cartID, {
          $push: { products: product?._id },
          $inc: { totalQuantity: 1, totalPrice: product?.price },
        });

        const userCart = await CartModel.findById(
          cartID,
          "-__v -createdAt -updatedAt"
        ).lean();

        return res.status(201).json({
          message: "Product added to cart successfully",
          userCart,
        });
      }

      case "DELETE": {
        const { productID, productQuantity } = req.body;

        const isValid =
          isValidObjectId(productID) || typeof productQuantity === "number";

        if (!isValid) {
          return res.status(422).json({ message: "Request body is invalid!" });
        }

        const user = await UserModel.findById(
          tokenPayload?.id,
          "cart -_id"
        ).populate("cart");

        const product = await ProductModel.findById(productID);

        if (!product) {
          return res.status(404).json({ message: "Product not found!" });
        }

        const cartID = user.cart._id;

        await CartModel.findByIdAndUpdate(cartID, {
          $pull: { products: product?._id },
          $inc: {
            totalQuantity: -productQuantity,
            totalPrice: -(productQuantity * product?.price),
          },
        });

        const userCart = await CartModel.findById(
          cartID,
          "-__v -createdAt -updatedAt"
        ).lean();

        return res.json({
          message: "Product removed from cart successfully",
          userCart,
        });
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in cart controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};

export default handler;
