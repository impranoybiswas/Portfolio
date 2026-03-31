"use client";
import React, { useContext } from "react";
import { ScrollContext } from "../providers/ScrollProvider";
import { IoMdArrowUp } from "react-icons/io";

/**
 * GoToTop Component
 *
 * A floating button that appears when the user scrolls down.
 * Allows the user to smoothly scroll back to the top of the page.
 * Uses ScrollContext to determine visibility.
 *
 * @returns {JSX.Element} The scroll-to-top button
 */
export default function GoToTop() {
  const context = useContext(ScrollContext);
  const isScrolled = context?.isScrolled ?? false;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-38 z-50 cursor-pointer bg-secondary transition-all duration-500 ease-in-out rounded-full border border-primary text-white text-2xl size-10 hidden md:flex justify-center items-center shadow hover:shadow-md hover:scale-105 group ${isScrolled ? "opacity-100 right-6 scale-100" : "opacity-0 -right-2 scale-0"}`}
      aria-label="Scroll to top"
    >
      <span className="fixed-button-tag">Go to top</span>
      <IoMdArrowUp size={26} />
    </button>
  );
}
