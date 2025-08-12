"use client";
import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };
  return (
    <footer className="bg-[#150519] text-primary h-18 flex flex-col md:flex-row justify-center md:justify-between items-center w-full border-t border-secondary/30 md:px-12">
      <h1>Copyright &copy; 2025</h1>
      <button
        className="bg-primary text-white py-1 px-4 rounded-full cursor-pointer shadow shadow-secondary/40 hover:shadow-md"
        onClick={scrollToTop}
        aria-label="Go to top"
      >
        Go to top &uarr;
      </button>
    </footer>
  );
}
