"use client";

import Toggle from "@/app/ui/Toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Toggle
      onClick={() => setTheme(isDark ? "light" : "dark")}
      isToggled={isDark}
    />
  );
}
