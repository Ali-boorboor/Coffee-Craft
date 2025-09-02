import { create } from "zustand";

type UseSearchStore = {
  isSearchInputAvailable: boolean;

  setIsSearchInputAvailable: (isSearchInputAvailable: boolean) => void;
};

const useSearchStore = create<UseSearchStore>((set) => ({
  isSearchInputAvailable: false,

  setIsSearchInputAvailable: (isSearchInputAvailable) => {
    set({ isSearchInputAvailable });
  },
}));

export { useSearchStore };
