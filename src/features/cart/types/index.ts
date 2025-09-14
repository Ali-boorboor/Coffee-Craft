import { Product } from "@/types";

interface CartProduct extends Product {
  quantity: number;
}

type Cart = {
  products: CartProduct[];
  totalPrice: number;
  totalQuantity: number;
};

type CartData = {
  userCart: {
    products: CartProduct[];
    totalPrice: number;
    totalQuantity: number;
  };
};

export type { Cart, CartData };
