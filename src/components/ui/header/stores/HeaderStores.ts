import { create } from "zustand";

type UseInputStore = {
  isSearchInputAvailable: boolean;

  setIsSearchInputAvailable: (isSearchInputAvailable: boolean) => void;
};

const useInputStore = create<UseInputStore>((set) => ({
  isSearchInputAvailable: false,

  setIsSearchInputAvailable: (isSearchInputAvailable) => {
    set({ isSearchInputAvailable });
  },
}));

type UseMenuStore = {
  isMenuAvailable: boolean;

  setIsMenuAvailable: (isMenuAvailable: boolean) => void;
};

const useMenuStore = create<UseMenuStore>((set) => ({
  isMenuAvailable: false,

  setIsMenuAvailable: (isMenuAvailable) => {
    set({ isMenuAvailable });
  },
}));

export { useInputStore, useMenuStore };
