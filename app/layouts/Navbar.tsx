"use client";

import { FaHome, FaUserAlt } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { IoMdSettings } from "react-icons/io";
import { MdDisplaySettings } from "react-icons/md";
import { LuContact } from "react-icons/lu";

const navLinks = [
  { name: "About", path: "about", icon: <FaUserAlt /> },
  { name: "Skills", path: "skills", icon: <IoMdSettings /> },
  { name: "", path: "home", icon: <FaHome /> },
  { name: "Projects", path: "projects", icon: <MdDisplaySettings /> },
  { name: "Contact", path: "contact", icon: <LuContact /> },
];

export default function Navbar() {

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 scale-99 hover:scale-100 transition-all duration-500 ease-in-out">
      <div className="flex items-center gap-2 rounded-full border border-secondary/40 bg-primary/20 backdrop-blur-md p-2 shadow-2xl text-white">
        {navLinks.map((link) => {
          return (
            <ScrollLink
              key={link.name}
              to={link.path}
              smooth={true}
              duration={300}
              spy={true}
              offset={-30}
              className="group h-10 w-10 md:w-auto flex items-center justify-center gap-2 rounded-full transition-all duration-300 ease-in-out text-white hover:bg-primary/20 cursor-pointer md:px-4 text-shadow-xs text-lg md:text-base"
              activeClass="bg-pink-600 text-secondary ring-2 ring-secondary/30"
            >
              {link.icon}
              {
                link.name !== "" && (
                  <span className="hidden md:inline-block">
                {link.name}
              </span>
                )
              }
            </ScrollLink>
          );
        })}
      </div>
    </nav>
  );
}
