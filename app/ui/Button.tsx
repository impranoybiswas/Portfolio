"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isOutline: boolean;
  isLarge: boolean;
  disabled?: boolean;
}

export default function Button({
  onClick,
  type = "button",
  disabled = false,
  className,
  label,
  leftIcon,
  rightIcon,
  isOutline,
  isLarge,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, amount: 0.2 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="rounded-lg p-px bg-transparent relative overflow-hidden group text-shadow-sm"
    >
      <div
        className={`absolute top-0 left-0 w-full h-full z-5 scale-150
          ${
            isOutline
              ? "bg-linear-to-b from-transparent via-secondary to-transparent animate-slowSpin"
              : "bg-linear-to-r from-primary to-secondary group-hover:bg-linear-to-l group-hover:via-purple-700 group-hover:to-pink-600 text-white"
          }
        `}
      />

      <div
        className={`${className} relative flex justify-center items-center gap-2 rounded-lg font-semibold cursor-pointer transition-all duration-500 ease-in-out group z-10
          ${
            isOutline
              ? "text-secondary bg-base-100 hover:bg-accent border border-secondary/30 hover:border-secondary/30"
              : ""
          }
          ${isLarge ? "text-xl md:text-2xl h-14 px-6" : "text-base h-9 px-5"}
        `}
      >
        {leftIcon && (
          <span className="group-hover:scale-115 transition-all duration-300 ease-in-out">
            {leftIcon}
          </span>
        )}
        {label}
        {rightIcon && (
          <span className="group-hover:inline-block group-hover:ml-1 transition-all duration-300 ease-in-out">
            {rightIcon}
          </span>
        )}
      </div>
    </motion.button>
  );
}
