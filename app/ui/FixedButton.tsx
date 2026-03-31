import React from "react";

export default function FixedButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`fixed z-150 size-10 bg-secondary flex justify-center items-center rounded-l-xl md:rounded-full border border-primary text-white text-xl md:text-2xl cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-secondary/50 ${className}`}
    >
      {children}
    </div>
  );
}
