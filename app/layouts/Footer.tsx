"use client";
import React from "react";

export default function Footer() {

  return (
    <footer className="bg-[#1f0c24] text-primary pb-2 pt-7 md:pt-5 md:pb-4 flex flex-col-reverse md:flex-row gap-4 justify-center md:justify-between items-center w-full border-t border-secondary/30 md:px-12">
      <h1>Copyright &copy; {new Date().getFullYear()}</h1>
    </footer>
  );
}
