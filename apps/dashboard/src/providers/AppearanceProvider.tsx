// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { prefersTheme } from "../../lib/prefersTheme";

type AppearanceProviderContext = {
  theme: string;
};

type AppearanceProviderProps = {};

const appearanceContext = createContext<AppearanceProviderContext | undefined>(undefined);

function AppearanceProvider(props: AppearanceProviderProps & PropsWithChildren) {
  const { children } = props;
  const [theme, setTheme] = useState(prefersTheme);

  useEffect(() => {
    const themeTogger = () => {
      setTheme(prefersTheme());

      const _key = "__APPEARANCE_THEME"; /* dark, light, auto */
      const appearanceTheme = localStorage.getItem(_key);
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (appearanceTheme === "auto" || appearanceTheme === null) {
        if (isDark) {
          document.documentElement.classList.remove("light");
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
        }
      }
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", themeTogger);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", themeTogger);
    }
  }, []);

  return (
    <appearanceContext.Provider value={{ theme }}>
      {children}
    </appearanceContext.Provider>
  );
}

function useAppearanceContext() {
  return (useContext(appearanceContext) as AppearanceProviderContext);
}

export {
  AppearanceProvider,
  useAppearanceContext
};