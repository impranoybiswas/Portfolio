"use client";

import React, { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../providers/ThemeProvider";

export default function ThemeToggler() {
  const context = useContext(ThemeContext);

  // Optional: Safe fallback if ThemeContext is not provided
  if (!context) {
    return null;
  }

  const { theme, toggleTheme } = context;

  return (
    <span
      role="button"
      className="cursor-pointer text-xl"
      data-tooltip-id="my-tooltip"
      data-tooltip-content={`Toggle ${theme === "light" ? "Dark" : "Light"}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
    </span>
  );
}
