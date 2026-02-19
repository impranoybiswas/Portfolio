"use client";
import React from "react";

export default function Footer() {

  return (
    <footer className="bg-base-200 text-secondary pb-3 pt-9 flex flex-col-reverse md:flex-row gap-4 justify-center items-center w-full border-t border-secondary/30 text-sm relative z-20">
      <h1>Copyright &copy; {new Date().getFullYear()}</h1>
    </footer>
  );
}
