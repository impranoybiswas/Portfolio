"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

export const themes = [
  {
    name: "Slate Indigo",
    key: "slate-indigo",
    colors: ["#4F46E5", "#818CF8", "#06B6D4"],
    // light mode CSS variable values
    light: {
      "--primary": "oklch(0.45 0.25 264)",         // #4F46E5
      "--primary-foreground": "oklch(0.985 0 0)",
      "--secondary": "oklch(0.60 0.20 264)",        // #818CF8
      "--secondary-foreground": "oklch(0.985 0 0)",
      "--accent": "oklch(0.72 0.18 199)",           // #06B6D4
      "--accent-foreground": "oklch(0.145 0 0)",
      "--base-100": "oklch(1 0 0)",                 // #FFFFFF
      "--base-200": "oklch(0.93 0.01 264)",         // #E8E8F0
    },
    // dark mode CSS variable values
    dark: {
      "--primary": "oklch(0.63 0.20 264)",          // #818CF8
      "--primary-foreground": "oklch(0.145 0 0)",
      "--secondary": "oklch(0.45 0.25 264)",        // #4F46E5
      "--secondary-foreground": "oklch(0.985 0 0)",
      "--accent": "oklch(0.78 0.18 199)",           // #22D3EE
      "--accent-foreground": "oklch(0.145 0 0)",
      "--base-100": "oklch(0.11 0.01 264)",         // #13131A
      "--base-200": "oklch(0.15 0.02 264)",         // #1E1E2E
    },
  },
  {
    name: "Emerald Pro",
    key: "emerald-pro",
    colors: ["#059669", "#10B981", "#F59E0B"],
    light: {
      "--primary": "oklch(0.52 0.18 162)",          // #059669
      "--primary-foreground": "oklch(0.985 0 0)",
      "--secondary": "oklch(0.62 0.18 162)",        // #10B981
      "--secondary-foreground": "oklch(0.985 0 0)",
      "--accent": "oklch(0.75 0.18 75)",            // #F59E0B
      "--accent-foreground": "oklch(0.145 0 0)",
      "--base-100": "oklch(1 0 0)",
      "--base-200": "oklch(0.93 0.02 162)",         // #E6F0EC
    },
    dark: {
      "--primary": "oklch(0.74 0.18 162)",          // #34D399
      "--primary-foreground": "oklch(0.145 0 0)",
      "--secondary": "oklch(0.52 0.18 162)",        // #059669
      "--secondary-foreground": "oklch(0.985 0 0)",
      "--accent": "oklch(0.82 0.18 75)",            // #FBBF24
      "--accent-foreground": "oklch(0.145 0 0)",
      "--base-100": "oklch(0.11 0.02 162)",         // #0F1A14
      "--base-200": "oklch(0.16 0.03 162)",         // #152A1E
    },
  },
  {
    name: "Rose Executive",
    key: "rose-executive",
    colors: ["#E11D48", "#FB7185", "#0EA5E9"],
    light: {
      "--primary": "oklch(0.52 0.27 15)",           // #E11D48
      "--primary-foreground": "oklch(0.985 0 0)",
      "--secondary": "oklch(0.68 0.22 15)",         // #FB7185
      "--secondary-foreground": "oklch(0.985 0 0)",
      "--accent": "oklch(0.65 0.20 220)",           // #0EA5E9
      "--accent-foreground": "oklch(0.985 0 0)",
      "--base-100": "oklch(1 0 0)",
      "--base-200": "oklch(0.94 0.02 15)",          // #F0E8EC
    },
    dark: {
      "--primary": "oklch(0.72 0.22 15)",           // #FB7185
      "--primary-foreground": "oklch(0.145 0 0)",
      "--secondary": "oklch(0.52 0.27 15)",         // #E11D48
      "--secondary-foreground": "oklch(0.985 0 0)",
      "--accent": "oklch(0.74 0.20 220)",           // #38BDF8
      "--accent-foreground": "oklch(0.145 0 0)",
      "--base-100": "oklch(0.11 0.02 15)",          // #1A0F12
      "--base-200": "oklch(0.16 0.03 15)",          // #2A1520
    },
  },
  {
    name: "Amber Obsidian",
    key: "amber-obsidian",
    colors: ["#D97706", "#F59E0B", "#7C3AED"],
    light: {
      "--primary": "oklch(0.62 0.18 75)",           // #D97706
      "--primary-foreground": "oklch(0.985 0 0)",
      "--secondary": "oklch(0.75 0.18 75)",         // #F59E0B
      "--secondary-foreground": "oklch(0.145 0 0)",
      "--accent": "oklch(0.48 0.28 300)",           // #7C3AED
      "--accent-foreground": "oklch(0.985 0 0)",
      "--base-100": "oklch(1 0 0)",
      "--base-200": "oklch(0.94 0.02 75)",          // #F0EBE0
    },
    dark: {
      "--primary": "oklch(0.83 0.18 75)",           // #FBBF24
      "--primary-foreground": "oklch(0.145 0 0)",
      "--secondary": "oklch(0.62 0.18 75)",         // #D97706
      "--secondary-foreground": "oklch(0.985 0 0)",
      "--accent": "oklch(0.68 0.22 300)",           // #A78BFA
      "--accent-foreground": "oklch(0.145 0 0)",
      "--base-100": "oklch(0.10 0.02 75)",          // #141008
      "--base-200": "oklch(0.14 0.02 75)",          // #1F1A0A
    },
  },
] as const;

export type ThemeKey = (typeof themes)[number]["key"];

type CSSVars = Record<string, string>;

interface ColorContextType {
  colorTheme: ThemeKey;
  setColorTheme: (key: ThemeKey) => void;
}

const ColorContext = createContext<ColorContextType>({
  colorTheme: "slate-indigo",
  setColorTheme: () => {},
});

function getInitialTheme(): ThemeKey {
  if (typeof window === "undefined") return "slate-indigo";
  return (localStorage.getItem("app-color-theme") as ThemeKey) ?? "slate-indigo";
}

function applyColorToDOM(key: ThemeKey, isDark: boolean) {
  const found = themes.find((t) => t.key === key);
  if (!found) return;

  const vars: CSSVars = isDark ? { ...found.dark } : { ...found.light };

  Object.entries(vars).forEach(([prop, value]) => {
    document.documentElement.style.setProperty(prop, value);
  });
}

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ThemeKey>(getInitialTheme);
  const { resolvedTheme } = useNextTheme();

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    applyColorToDOM(colorTheme, isDark);
  }, [colorTheme, isDark]);

  const setColorTheme = (key: ThemeKey) => {
    localStorage.setItem("app-color-theme", key);
    setColorThemeState(key);
  };

  return (
    <ColorContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorContext.Provider>
  );
}

export const useColorTheme = () => useContext(ColorContext);