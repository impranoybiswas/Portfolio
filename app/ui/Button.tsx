import React, { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  lebel: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isOutline: boolean;
  isLarge: boolean;
}

export default function Button({
  onClick,
  className,
  lebel,
  leftIcon,
  rightIcon,
  isOutline,
  isLarge,
}: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className="rounded-lg p-[1px] bg-transparent relative overflow-hidden group text-shadow-sm"
    >
      <div
        className={`absolute top-0 left-0 w-full h-full z-5 scale-150
    ${
      isOutline
        ? "bg-gradient-to-b from-transparent via-secondary to-transparent animate-slowSpin"
        : "bg-gradient-to-r from-primary to-secondary group-hover:bg-gradient-to-l group-hover:via-purple-700 group-hover:to-pink-600 text-white "
    }
  `}
      />

      <div
        className={`${className} relative flex justify-center items-center gap-2 rounded-lg font-semibold cursor-pointer transition-all duration-500 ease-in-out group z-10
    ${
      isOutline
        ? " text-secondary bg-base-100 hover:bg-accent border-[1px] border-secondary/10 hover:border-secondary/30 "
        : ""
    }
    ${isLarge ? "text-2xl h-14 px-7" : "text-base h-9 px-5"}
      `}
      >
        <span className="group-hover:scale-115 transition-all duration-300 ease-in-out">
          {leftIcon}
        </span>
        {lebel}
        {rightIcon && (
          <span className="group-hover:inline-block group-hover:ml-1 transition-all duration-300 ease-in-out">
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
}
