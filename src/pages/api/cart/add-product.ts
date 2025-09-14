import UserModel from "@/models/User";
import CartModel from "@/models/Cart";
import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import { validateToken } from "@/utils/jwtUtils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    const hasToken =
      req.cookies.token && req.cookies.token.startsWith("Bearer ");

    if (!hasToken) {
      return res.status(401).json({ message: "Unauthorized!" });
    }

    switch (req.method) {
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

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in add product to cart controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};
