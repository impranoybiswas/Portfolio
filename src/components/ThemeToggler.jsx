import React, { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../providers/Context";

export default function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <span
      data-tooltip-id="my-tooltip"
      data-tooltip-content={`Toggle ${theme === "light" ? "Dark" : "Light"}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
    </span>
  );
}
