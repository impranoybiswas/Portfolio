import React from "react";

export default function Title({ title }) {
  return (
    <div className="w-full text-center text-2xl md:text-4xl font-bold text-shadow-xs pt-20 md:pt-24 lg:pt-30 pb-8">
      {title}
    </div>
  );
}
