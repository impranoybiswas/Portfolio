"use client";

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
    <button
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative inline-flex items-center
        w-[56px] h-[28px] rounded-full
        border transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        cursor-pointer outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background
        ${isDark
          ? "bg-slate-900 border-slate-700 focus-visible:ring-slate-500"
          : "bg-amber-50 border-amber-200 focus-visible:ring-amber-400"
        }
      `}
    >
      {/* Track glow */}
      <span
        className={`
          absolute inset-0 rounded-full transition-opacity duration-500
          ${isDark
            ? "opacity-100 shadow-[inset_0_0_12px_rgba(99,102,241,0.25)]"
            : "opacity-100 shadow-[inset_0_0_12px_rgba(251,191,36,0.2)]"
          }
        `}
      />

      {/* Stars (dark mode decoration) */}
      <span className={`absolute left-2 flex flex-col gap-[3px] transition-all duration-500 ${isDark ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}`}>
        <span className="flex gap-[3px]">
          <span className="w-[2px] h-[2px] rounded-full bg-slate-300" />
          <span className="w-[2px] h-[2px] rounded-full bg-slate-400 mt-[2px]" />
        </span>
        <span className="w-[2px] h-[2px] rounded-full bg-slate-300 ml-[3px]" />
      </span>

      {/* Sun rays (light mode decoration) */}
      <span className={`absolute right-[10px] transition-all duration-500 ${isDark ? "opacity-0 translate-x-1" : "opacity-100 translate-x-0"}`}>
        <span className="relative flex items-center justify-center w-3 h-3">
          {[0, 45, 90, 135].map((deg) => (
            <span
              key={deg}
              className="absolute w-[1.5px] h-[5px] rounded-full bg-amber-400 origin-center"
              style={{ transform: `rotate(${deg}deg) translateY(-4px)` }}
            />
          ))}
        </span>
      </span>

      {/* Thumb */}
      <span
        className={`
          relative z-10 flex items-center justify-center
          w-[22px] h-[22px] rounded-full
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          shadow-md
          ${isDark
            ? "translate-x-[30px] bg-primary shadow-primary/50"
            : "translate-x-[2px] bg-secondary shadow-secondary/50"
          }
        `}
      >
        {/* Moon shape */}
        <span
          className={`
            absolute inset-0 rounded-full transition-all duration-400
            ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
        >
          {/* Crater */}
          <span className="absolute top-[5px] left-[5px] w-[5px] h-[5px] rounded-full bg-accent/60" />
          <span className="absolute bottom-[5px] right-[4px] w-[3px] h-[3px] rounded-full bg-accent/40" />
        </span>

        {/* Sun center dot */}
        <span
          className={`
            w-[8px] h-[8px] rounded-full bg-amber-200
            transition-all duration-300
            ${isDark ? "opacity-0 scale-0" : "opacity-100 scale-100"}
          `}
        />
      </span>
    </button>
  );
}