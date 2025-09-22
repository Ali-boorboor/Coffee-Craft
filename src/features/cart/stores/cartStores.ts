import { create } from "zustand";
import { Cart } from "@/features/cart/types";

type UseCartStore = {
  isCartPanelAvailable: boolean;
  userCart: Cart;

  setIsCartPanelAvailable: (isCartPanelAvailable: boolean) => void;
  setUserCart: (userCart: Cart) => void;
};

const useCartStore = create<UseCartStore>((set) => ({
  isCartPanelAvailable: false,
  userCart: { products: [], totalPrice: 0, totalQuantity: 0 },

  setIsCartPanelAvailable: (isCartPanelAvailable) => {
    set({ isCartPanelAvailable });
  },
  setUserCart: (userCart) => set({ userCart }),
}));

export { useCartStore };
