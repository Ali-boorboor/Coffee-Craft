import { create } from "zustand";
import { persist } from "zustand/middleware";

type UseAuthStore = {
  isUserLogin: boolean;

  setIsUserLogin: (isUserLogin: boolean) => void;
};

const LOCAL_STORAGE_KEY = "is-user-login";

const useAuthStore = create<UseAuthStore>()(
  persist(
    (set) => ({
      isUserLogin: false,

      setIsUserLogin: (isUserLogin) => set({ isUserLogin }),
    }),
    {
      name: LOCAL_STORAGE_KEY,
    }
  )
);

export { useAuthStore };
