import UserModel from "@/models/User";
import CartModel from "@/models/Cart";
import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import { validateToken } from "@/utils/jwtUtils";
import { Product } from "@/types";

interface normalizedProduct extends Product {
  quantity: number;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    const hasToken =
      req.cookies.token && req.cookies.token.startsWith("Bearer ");

    if (!hasToken) {
      return res.status(401).json({ message: "Unauthorized!" });
    }

    switch (req.method) {
      case "GET": {
        const token = req.cookies.token?.split(" ")[1]!;

        const tokenPayload: any = validateToken(token);

        const user = await UserModel.findById(
          tokenPayload.id,
          "cart -_id"
        ).populate("cart", "_id");

        const cart: any = await CartModel.findById(
          user.cart._id,
          "-__v -createdAt -updatedAt"
        )
          .populate("products", "-__v -createdAt -updatedAt")
          .lean();

        const normalizeRepeatedProducts = cart?.products?.reduce(
          (prevProducts: normalizedProduct[], product: normalizedProduct) => {
            const existingProduct = prevProducts.find(
              (accProduct: normalizedProduct) => {
                return String(accProduct._id) === String(product._id);
              }
            );

            if (existingProduct) {
              existingProduct.quantity += 1;
            } else {
              prevProducts.push({ ...product, quantity: 1 });
            }
            return prevProducts;
          },
          []
        );

        return res.json({
          message: "User cart catched successfully",
          userCart: { ...cart, products: normalizeRepeatedProducts },
        });
      }

      case "POST": {
        const token = req.cookies.token?.split(" ")[1]!;

        const tokenPayload: any = validateToken(token);

        const { productID } = req.body;

        const user = await UserModel.findById(
          tokenPayload.id,
          "cart -_id"
        ).populate("cart");

        const product = await ProductModel.findById(productID);

        const cartID = user.cart._id;

        await CartModel.findByIdAndUpdate(cartID, {
          $push: { products: product._id },
          $inc: { totalQuantity: 1, totalPrice: product.price },
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
        const token = req.cookies.token?.split(" ")[1]!;

        const tokenPayload: any = validateToken(token);

        const { productID, productQuantity } = req.body;

        const user = await UserModel.findById(
          tokenPayload.id,
          "cart -_id"
        ).populate("cart");

        const product = await ProductModel.findById(productID);

        const cartID = user.cart._id;

        await CartModel.findByIdAndUpdate(cartID, {
          $pull: { products: product._id },
          $inc: {
            totalQuantity: -productQuantity,
            totalPrice: -(productQuantity * product.price),
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
