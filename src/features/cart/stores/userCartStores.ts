import { create } from "zustand";
import { Product } from "@/types";

type UserCart = {
  products: Product[];
  totalPrice: Number;
  totalQuantity: Number;
};

type UseUserCartStore = {
  userCart: UserCart;

  setUserCart: (userCart: UserCart) => void;
};

const useUserCartStore = create<UseUserCartStore>((set) => ({
  userCart: { products: [], totalPrice: 0, totalQuantity: 0 },

  setUserCart: (userCart) => set({ userCart }),
}));

export { useUserCartStore };
