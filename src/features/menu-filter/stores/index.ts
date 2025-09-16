import { create } from "zustand";
import { MenuFilterTypes } from "@/features/menu-filter/types";

type UseMenuFilterStore = {
  menuFilterType: MenuFilterTypes;

  setMenuFilterType: (menuFilterType: MenuFilterTypes) => void;
};

const useMenuFilterStore = create<UseMenuFilterStore>((set, get) => ({
  menuFilterType: "all",

  setMenuFilterType: (menuFilterType) => {
    const hasFilterChanged = get().menuFilterType !== menuFilterType;

    if (hasFilterChanged) {
      set({ menuFilterType });
    }
  },
}));

export { useMenuFilterStore };
