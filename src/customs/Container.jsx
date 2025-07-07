import React from "react";

export default function Container({ children, customClass, id }) {
  return (
    <section
    id={id}
    className={`min-h-[calc(100dvh-4rem)] w-full flex flex-col items-center pb-16 px-3 md:px-10 lg:px-25 text-white bg-primary relative z-10 overflow-hidden ${customClass}`}>
      {children}
    </section>
  );
}
