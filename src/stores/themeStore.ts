import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      setIsDark: (isDark) =>
        set(() => {
          window?.document.documentElement.classList.toggle("dark", isDark);
          return { isDark };
        }),
    }),
    {
      name: "Theme",
    }
  )
);
