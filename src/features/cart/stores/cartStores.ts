import { create } from "zustand";

type UseCartStore = {
  isCartPanelAvailable: boolean;

  setIsCartPanelAvailable: (isCartPanelAvailable: boolean) => void;
};

const useCartStore = create<UseCartStore>((set) => ({
  isCartPanelAvailable: false,

  setIsCartPanelAvailable: (isCartPanelAvailable) => {
    set({ isCartPanelAvailable });
  },
}));

export { useCartStore };
