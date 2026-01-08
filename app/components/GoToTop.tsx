"use client";
import React, { useContext } from 'react'
import { ScrollContext } from '../providers/ScrollProvider';
import { IoMdArrowUp } from 'react-icons/io';

export default function GoToTop() {
    const context = useContext(ScrollContext);
      const isScrolled = context?.isScrolled ?? false;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-12 z-50 cursor-pointer bg-primary transition-all duration-500 ease-in-out rounded-full text-white size-10 hidden md:flex justify-center items-center shadow hover:shadow-md hover:scale-105 group ${isScrolled ? "opacity-100 right-10 scale-100" : "opacity-0 -right-2 scale-0"}`}>
    <span className="absolute top-0 left-0 text-xs opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 group-hover:-top-10 group-hover:-left-10 transition-all duration-500 ease-in-out bg-primary px-3 py-1 rounded-full border-secondary border shadow-xs whitespace-nowrap">Go to top</span>
    <IoMdArrowUp size={26} /></button>
  )
}
