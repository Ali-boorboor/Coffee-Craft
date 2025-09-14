import { create } from "zustand";
import { Cart } from "@/features/cart/types";

type UseUserCartStore = {
  userCart: Cart;

  setUserCart: (userCart: Cart) => void;
};

const useUserCartStore = create<UseUserCartStore>((set) => ({
  userCart: { products: [], totalPrice: 0, totalQuantity: 0 },

  setUserCart: (userCart) => set({ userCart }),
}));

export { useUserCartStore };
