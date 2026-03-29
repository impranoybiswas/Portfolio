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
              ? "bg-linear-to-b from-transparent via-primary to-transparent animate-slowSpin"
              : "bg-linear-to-br from-primary via-primary to-secondary group-hover:bg-linear-to-br group-hover:from-secondary group-hover:via-primary group-hover:to-primary transition-all duration-500 ease-in-out"
          }
        `}
      />

      <div
        className={`${className} relative flex justify-center items-center gap-2 rounded-lg font-semibold cursor-pointer transition-all duration-500 ease-in-out group z-10
          ${
            isOutline
              ? "text-primary bg-background border border-primary/10 hover:border-primary/30"
              : "text-primary-foreground"
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
