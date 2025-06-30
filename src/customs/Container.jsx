import React from "react";

export default function Container({ children, customClass, id }) {
  return (
    <main
    id={id}
    className={`min-h-dvh w-full flex flex-col items-center px-3 md:px-8 lg:px-20 text-white bg-primary ${customClass}`}>
      {children}
    </main>
  );
}
