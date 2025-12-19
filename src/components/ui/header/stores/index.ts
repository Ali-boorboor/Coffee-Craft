import { create } from "zustand";

type UseMobileMenuStore = {
  isMenuAvailable: boolean;

  setIsMenuAvailable: (isMenuAvailable: boolean) => void;
};

const useMobileMenuStore = create<UseMobileMenuStore>((set) => ({
  isMenuAvailable: false,

  setIsMenuAvailable: (isMenuAvailable) => {
    set({ isMenuAvailable });
  },
}));

export { useMobileMenuStore };
