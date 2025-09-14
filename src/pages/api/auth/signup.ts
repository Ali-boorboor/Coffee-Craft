import UserModel from "@/models/User";
import CartModel from "@/models/Cart";
import connectToDB from "@/database/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import { hashData } from "@/utils/bcryptUtils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  try {
    switch (req.method) {
      case "POST": {
        const { username, password } = req.body;

        const isUserAlreadyExist = await UserModel.findOne({ username }).lean();

        if (isUserAlreadyExist) {
          return res.status(409).json({ message: "User already exist!" });
        } else {
          const newCartForNewUser = await CartModel.create({});

          const hashedPassword = await hashData(password);

          const user = await UserModel.create({
            username,
            password: hashedPassword,
            cart: newCartForNewUser._id,
          });

          const newUser = user.toObject();
          Reflect.deleteProperty(newUser, "password");
          Reflect.deleteProperty(newUser, "cart");
          Reflect.deleteProperty(newUser, "__v");

          return res
            .status(201)
            .json({ message: "Signed up successfully", newUser });
        }
      }

      default: {
        return res.status(405).json({ message: "Method is wrong!" });
      }
    }
  } catch (error) {
    console.log("Error in signup controller =>", error);
    return res.status(500).json({ message: "Error in server!" });
  }
};
