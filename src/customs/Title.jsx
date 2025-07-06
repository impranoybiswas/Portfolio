import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <div className="w-full text-center text-shadow-xs pb-5">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-base md:text-lg opacity-65">{subtitle}</p>
    </div>
  );
}
