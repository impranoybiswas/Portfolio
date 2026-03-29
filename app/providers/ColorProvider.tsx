"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

export const colors = [
  {
    name: "Midnight Glow",
    key: "midnight-glow",
    colors: ["#4F46E5", "#06B6D4", "#111827"],
    light: {
      "--background": "oklch(0.98 0.01 264)",
      "--foreground": "oklch(0.15 0.02 264)",
      "--primary": "oklch(0.55 0.22 264)",
      "--primary-foreground": "oklch(0.98 0 0)",
      "--secondary": "oklch(0.65 0.15 264)",
      "--secondary-foreground": "oklch(0.98 0 0)",
      "--accent": "oklch(0.75 0.18 199)",
      "--accent-foreground": "oklch(0.15 0.02 264)",
      "--base-100": "oklch(1 0 0)",
      "--base-200": "oklch(0.96 0.01 264)",
    },
    dark: {
      "--background": "oklch(0.12 0.02 264)",
      "--foreground": "oklch(0.95 0.01 264)",
      "--primary": "oklch(0.65 0.20 264)",
      "--primary-foreground": "oklch(0.12 0.02 264)",
      "--secondary": "oklch(0.45 0.25 264)",
      "--secondary-foreground": "oklch(0.98 0 0)",
      "--accent": "oklch(0.80 0.18 199)",
      "--accent-foreground": "oklch(0.12 0.02 264)",
      "--base-100": "oklch(0.15 0.02 264)",
      "--base-200": "oklch(0.18 0.02 264)",
    },
  },
  {
    name: "Forest Zen",
    key: "forest-zen",
    colors: ["#059669", "#D97706", "#065F46"],
    light: {
      "--background": "oklch(0.97 0.02 162)",
      "--foreground": "oklch(0.15 0.03 162)",
      "--primary": "oklch(0.58 0.16 162)",
      "--primary-foreground": "oklch(0.98 0 0)",
      "--secondary": "oklch(0.68 0.12 162)",
      "--secondary-foreground": "oklch(0.98 0 0)",
      "--accent": "oklch(0.80 0.14 85)",
      "--accent-foreground": "oklch(0.15 0.03 162)",
      "--base-100": "oklch(1 0 0)",
      "--base-200": "oklch(0.94 0.02 162)",
    },
    dark: {
      "--background": "oklch(0.14 0.02 162)",
      "--foreground": "oklch(0.94 0.02 162)",
      "--primary": "oklch(0.75 0.16 162)",
      "--primary-foreground": "oklch(0.14 0.02 162)",
      "--secondary": "oklch(0.58 0.16 162)",
      "--secondary-foreground": "oklch(0.98 0 0)",
      "--accent": "oklch(0.85 0.15 85)",
      "--accent-foreground": "oklch(0.14 0.02 162)",
      "--base-100": "oklch(0.16 0.02 162)",
      "--base-200": "oklch(0.20 0.03 162)",
    },
  },
  {
    name: "Nordic Frost",
    key: "nordic-frost",
    colors: ["#3B82F6", "#14B8A6", "#F43F5E"],
    light: {
      "--background": "oklch(0.99 0.005 245)",
      "--foreground": "oklch(0.12 0.02 245)",
      "--primary": "oklch(0.52 0.16 245)",
      "--primary-foreground": "oklch(0.98 0 0)",
      "--secondary": "oklch(0.62 0.14 200)",
      "--secondary-foreground": "oklch(0.98 0 0)",
      "--accent": "oklch(0.68 0.20 15)",
      "--accent-foreground": "oklch(0.98 0 0)",
      "--base-100": "oklch(1 0 0)",
      "--base-200": "oklch(0.96 0.01 245)",
    },
    dark: {
      "--background": "oklch(0.15 0.01 245)",
      "--foreground": "oklch(0.98 0.005 245)",
      "--primary": "oklch(0.72 0.14 245)",
      "--primary-foreground": "oklch(0.12 0.02 245)",
      "--secondary": "oklch(0.78 0.12 200)",
      "--secondary-foreground": "oklch(0.12 0.02 245)",
      "--accent": "oklch(0.78 0.18 15)",
      "--accent-foreground": "oklch(0.12 0.02 245)",
      "--base-100": "oklch(0.18 0.01 245)",
      "--base-200": "oklch(0.22 0.02 245)",
    },
  },
  {
    name: "Cyber Sunset",
    key: "cyber-sunset",
    colors: ["#EC4899", "#8B5CF6", "#F59E0B"],
    light: {
      "--background": "oklch(0.97 0.02 300)",
      "--foreground": "oklch(0.12 0.04 300)",
      "--primary": "oklch(0.62 0.24 15)",
      "--primary-foreground": "oklch(0.985 0 0)",
      "--secondary": "oklch(0.55 0.22 300)",
      "--secondary-foreground": "oklch(0.985 0 0)",
      "--accent": "oklch(0.78 0.18 75)",
      "--accent-foreground": "oklch(0.12 0.04 300)",
      "--base-100": "oklch(1 0 0)",
      "--base-200": "oklch(0.94 0.02 300)",
    },
    dark: {
      "--background": "oklch(0.10 0.03 300)",
      "--foreground": "oklch(0.94 0.02 300)",
      "--primary": "oklch(0.75 0.22 15)",
      "--primary-foreground": "oklch(0.10 0.03 300)",
      "--secondary": "oklch(0.68 0.20 300)",
      "--secondary-foreground": "oklch(0.10 0.03 300)",
      "--accent": "oklch(0.82 0.18 75)",
      "--accent-foreground": "oklch(0.10 0.03 300)",
      "--base-100": "oklch(0.14 0.04 300)",
      "--base-200": "oklch(0.18 0.05 300)",
    },
  },
] as const;

export type ThemeKey = (typeof colors)[number]["key"];

type CSSVars = Record<string, string>;

interface ColorContextType {
  colorTheme: ThemeKey;
  setColorTheme: (key: ThemeKey) => void;
}

const ColorContext = createContext<ColorContextType>({
  colorTheme: "forest-zen",
  setColorTheme: () => {},
});

function getInitialTheme(): ThemeKey {
  if (typeof window === "undefined") return "forest-zen";
  return (
    (localStorage.getItem("app-color-theme") as ThemeKey) ?? "forest-zen"
  );
}

function applyColorToDOM(key: ThemeKey, isDark: boolean) {
  const found = colors.find((c) => c.key === key);
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
